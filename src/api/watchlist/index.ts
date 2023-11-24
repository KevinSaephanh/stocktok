import prisma from '@utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      await POST(req.body, res);
    case 'GET':
      await GET(req.body, res);
    default:
      throw new Error(
        `HTTP method: ${req.method} is not supposed at this route`
      );
  }
}

export async function POST(
  { userId, createWatchlistDto }: any,
  res: NextApiResponse
) {
  const watchlist = await prisma.watchlist.create({
    data: {
      userId,
      ...createWatchlistDto,
    },
  });
  return res.status(201).json({ watchlist });
}

export async function GET({ userId }: any, res: NextApiResponse) {
  const watchlists = await prisma.watchlist.find({
    where: { userId },
  });
  return res.status(200).json({ watchlists });
}
