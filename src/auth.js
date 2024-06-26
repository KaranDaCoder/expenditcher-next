import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { connectDb } from '@/lib/dbConnect';
import User from '@/models/User';
import PaymentMode from './models/PaymentMode';
import { cookies } from 'next/headers';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      await connectDb();
      const curr_session = await User.findOne({ email: session?.user?.email });
      if (!curr_session) {
        return;
      }
      session.user._id = curr_session._id.toString();
       session.user.username = curr_session.username.toString();
       const cookie_auth_js_session = cookies().get(
         'authjs.session-token'
       ).value;
       console.log(
        `authjs.session-token=${JSON.stringify(cookie_auth_js_session)}`);
      return session;
    },
    async signIn({ profile }) {
      const { email, name, picture } = profile;
      const username = email.toLowerCase().split('@')[0];
      await connectDb();
      try {
        const userExist = await User.findOne({ email });
        if (!userExist) {
          const create_user = await User.create({
            username: username,
            name,
            email,
            picture,
          });
          await create_user.save();
          console.log(
            `User does not exist -- create / register a new user : ${JSON.stringify(
              create_user
            )}`
          );
          const isDefaultPayment = await PaymentMode.findOne({
            payment_mode_name: 'Cash',
          });
          if (!isDefaultPayment) {
            const defaultPayment = await PaymentMode.create({
              payment_mode_name: 'Cash',
              payment_mode_type: 'Cash',
              owner_id: create_user?._id,
            });
            await defaultPayment.save();
          } else {
            console.log(`Default Payment - Cash already exist for user.`);
          }
        } else {
          console.log(`User already exists`);
        }
        return true;
      } catch (error) {
        console.log(error);
        console.log(`Something went wrong while login/registering user`);
        return false;
      }
    },
  },
  pages: {
    signIn: '/',
    error: '/',
    newUser: '/',
  },
});
