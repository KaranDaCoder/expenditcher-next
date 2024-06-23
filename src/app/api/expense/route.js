import { auth } from "@/auth"
import { connectDb } from "@/lib/dbConnect";
import Expense from "@/models/Expense";
import PaymentMode from "@/models/PaymentMode";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async(request, {params}) => {
 const session = await auth();
 if(!session) return new NextResponse(JSON.stringify({error : `Not authorized to perform this operation`}), {status:401});
 const {
   user: { _id },
 } = session;
 const searchParams = request.nextUrl.searchParams;
 const query = searchParams.get("status");
 try {
  await connectDb();
  const all_expenses = await Expense.find({ owner_id: _id})
    .populate('payment_mode_id')
    .sort({ date: -1 });
    const expenses  = query ? all_expenses.filter((expense) =>  (expense.status === query)) : all_expenses;
    var expense_total = expenses.reduce(function (prev, curr) {
      return parseFloat(prev) + parseFloat(curr.amount);
    }, parseFloat(0.0));
  return new NextResponse(
    JSON.stringify({
      total: expenses.length,
      expense_total,
      result: expenses,
    }),
    { status: 200 }
  );
 } catch (error) {
  console.log(error)
  return new NextResponse(JSON.stringify({error}), {status:500})
 }
}

export const POST = async(request, {params}) => {
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
    await connectDb();
    const userExist = await User.findById(_id);
    if (!userExist)
      return new NextResponse(JSON.stringify({ error: `User Not Found` }), {
        status: 404,
      });
    const {category, name, amount, state, payment_mode_id, date, status, desc, owner_id} = await request.json();
    // const isPaymentMode = await 
    const isPaymentModeWithUser = await PaymentMode.findOne({owner_id: owner_id})
    console.log(isPaymentModeWithUser)
    if(!isPaymentModeWithUser) return new NextResponse(JSON.stringify({error : `Payment mode not associated with user`}), {status: 404});

    const create_expense = await Expense.create({
      category,
      name,
      amount,
      state,
      payment_mode_id,
      date,
      status,
      desc,
      owner_id,
    });
    await create_expense.save();
    return new NextResponse(JSON.stringify({create_expense}), {status:201})
   } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error }), { status: 500 });
   }
}