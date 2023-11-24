import prisma from '@utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const passwordRegex = new RegExp('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).*');

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { email, username, password } = req.body.data;

      const existingUser = await prisma.user.findUnique({
        where: { email: email.toLocaleLowerCase() },
      });

      if (existingUser) {
        throw new Error(`User with email: ${email} already exists`);
      }

      await prisma.user.create({
        data: {
          username,
          password,
          email: email.toLocaleLowerCase(),
          role: 'USER',
          avatar: 'default',
        },
      });
      await sendVerificationEmail({ email });

      return res.status(201);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} is not allowed.`);
};
