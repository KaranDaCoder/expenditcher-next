import { auth } from '@/auth';
import { connectDb } from '@/lib/dbConnect';
import PaymentMode from '@/models/PaymentMode';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const session = await auth();
  if (!session)
    return new NextResponse(
      JSON.stringify({ error: `Not authorized to perform this operation` }),
      { status: 401 }
    );
  try {
    const {
      user: { _id },
    } = session;
    const owner_id = await User.findById(_id);
    if (!owner_id)
      return new NextResponse(JSON.stringify({ error: `User Not Found` }), {
        status: 404,
      });
    const owner_Payment_modes = await PaymentMode.find({
      owner_id: _id,
    }).populate('owner_id');
    return new NextResponse(
      JSON.stringify({
        result: owner_Payment_modes,
        total: owner_Payment_modes.length,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error: error }), { status: 500 });
  }
};

export const POST = async (request, { params }) => {
  const session = await auth();
  if (!session)
    return new NextResponse(
      JSON.stringify({ error: `Not authorized to perform this operation` }),
      { status: 401 }
    );
  try {
    await connectDb();
    const {
      user: { _id },
    } = session;

    const { payment_mode_name, payment_mode_type } = await request.json();
    if (!payment_mode_name || !payment_mode_type)
      return new NextResponse(
        JSON.stringify({ error: `Incorrect Information Entered` }),
        { status: 400 }
      );

    const new_payment_mode = {
      payment_mode_name,
      payment_mode_type,
      owner_id: _id,
    };
    const new_payment = await PaymentMode.create(new_payment_mode);
    await new_payment.save();
    console.log(`New Payment To Be Posted : ${JSON.stringify(new_payment_mode)}`);
    return new NextResponse(JSON.stringify(new_payment), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
