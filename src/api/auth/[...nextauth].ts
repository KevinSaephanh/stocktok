import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import prisma from '@utils/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export async function authHandler(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const user = await prisma.user.findUniqueOrThrow({
            where: { email: credentials.email.toLocaleLowerCase() },
          });

          if (!(await compare(credentials.password, user.password!))) {
            return null;
          }

          return user;
        },
      }),
    ],
    pages: {
      signIn: '/signin',
    },
    session: {
      strategy: 'jwt',
    },
    secret: process.env.ACCESS_TOKEN_SECRET,
  });
}
