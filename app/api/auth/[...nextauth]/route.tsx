import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : "",
      clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : "",
    }),
  ],
  callbacks: {
    async session({ session }: any) {
      const userSession = await User.findOne({ email: session.user.email });
      session.user.id = userSession._id.toString();
      return session;
    },
    async signIn({ account, profile, user, credentials }: any) {
      try {
        await connectToDB();
        const userExists = await User.findOne({ email: profile.email });
        console.log(userExists);

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile?.username?.replace(" ", "")?.toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
