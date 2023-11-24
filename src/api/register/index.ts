import prisma from '@utils/prisma';
import { sendVerificationEmail } from '@utils/sendVerificationEmail';
import { NextApiRequest, NextApiResponse } from 'next';

const passwordRegex = new RegExp('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).*');

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, username, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLocaleLowerCase() },
    });

    if (existingUser) {
      throw new Error(`User with email: ${email} already exists`);
    }

    // Create user and send verification email
    const user = await prisma.user.create({
      data: {
        username,
        password,
        email: email.toLocaleLowerCase(),
        avatar: 'default',
      },
    });
    await sendVerificationEmail(user);

    return res.status(201);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
