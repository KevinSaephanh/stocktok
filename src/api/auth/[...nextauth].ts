import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import prisma from '@utils/prisma';

export async function authHandler(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        async authorize({ email, password }, _req) {
          if (!email || !password) {
            return null;
          }

          const user = await prisma.user.findUnique({
            where: { email: email },
          });

          if (!user || !(await compare(password, user.password!))) {
            return null;
          }

          return user;
        },
      }),
    ],
    pages: {
      signIn: '/login',
    },
    session: {
      strategy: 'jwt',
    },
    secret: process.env.ACCESS_TOKEN_SECRET,
  });
}
