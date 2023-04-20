import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { verifyPassword } from "../../../helpers/auth-helper";
import { connectToMongoDB } from "../../../helpers/mongodb-helper";

export default NextAuth({
  session: {
    jwt: true,
  },
  secret:process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        // connecting to DataBase to check
        const connectMongo = await connectToMongoDB();
        const user = await connectMongo.db().collection("users").findOne({
          email: credentials.enteredEmail,
        });
        if (!user) {
          connectMongo.close();
          throw new Error("Email not found!");
        }

        // if user email was found in DataBase, check password
        const passwordIsValid = await verifyPassword(
          credentials.enteredPassword,
          user.password
        );

        if (!passwordIsValid) {
          connectMongo.close();
          throw new Error("Invalid Password!");
        }

        connectMongo.close();
        return user;
      },
    }),
  ],
});
