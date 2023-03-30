import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // this is where your custom modifcations,
        // the stuff above is just "template"
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("No user with that email");
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("No user with that password");
        }

        return { email: user.email, name: user.name };
      },
    }),
  ],
});
