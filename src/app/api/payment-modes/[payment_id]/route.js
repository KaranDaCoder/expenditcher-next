import { auth } from "@/auth"
import { connectDb } from "@/lib/dbConnect";
import PaymentMode from "@/models/PaymentMode";
import { NextResponse } from "next/server";

export const DELETE = async(request, {params}) => {
 const {payment_id} = params;
 const session = await auth();
 if(!session) return new NextResponse(JSON.stringify({error : `Not authenticated to perform this operation`}), {status : 401});

 try {
  await connectDb();
   const {
     user: { _id },
   } = session;
  const isPaymentFetched = await PaymentMode.findById(payment_id);
  if(!isPaymentFetched) return new NextResponse(JSON.stringify({error : 'payment method not found or has been deleted already'}), {status: 404});
  
  await PaymentMode.findByIdAndDelete(payment_id)
  
  return new NextResponse(JSON.stringify({message: 'sucess, payment account deleted successfully!'}), {status:202})
  
 } catch (error) {
  console.log(error)
  return new NextResponse(JSON.stringify({error:error}), {status:500})
  
 }
}