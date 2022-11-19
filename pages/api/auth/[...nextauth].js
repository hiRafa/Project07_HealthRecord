import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { verifyPassword } from "../../../helpers/auth-helper";
import { connectToMongoDB } from "../../../helpers/mongodb-helper";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // connecting to DataBase to check
        const connectMongo = await connectToMongoDB();
        const user = await connectMongo.db().collection("users").findOne({
          email: credentials.email,
        });
        if (!user) {
          client.close();
          throw new Error("Email not found!");
        }

        // if user email was found in DataBase, check password
        const passwordIsValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!passwordIsValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        return user;
      },
    }),
  ],
});
