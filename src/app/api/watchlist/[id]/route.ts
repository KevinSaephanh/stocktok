import prisma from '@utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const watchlistId = Number(req.query.id);
  switch (req.method) {
    case 'GET':
      await GET(watchlistId, res);
    case 'PATCH':
      await PATCH(watchlistId, req.body, res);
    case 'DELETE':
      await DELETE(watchlistId, res);
    default:
      throw new Error(
        `HTTP method: ${req.method} is not supposed at this route`
      );
  }
}

export async function GET(id: number, res: NextApiResponse) {
  const watchlist = await prisma.watchlist.findUniqueOrThrow({
    where: { id },
  });
  return res.status(200).json({ watchlist });
}

export async function PATCH(
  id: number,
  updateWatchlistDto: any,
  res: NextApiResponse
) {
  const watchlist = await prisma.watchlist.update({
    data: {
      id,
      ...updateWatchlistDto,
    },
  });
  return res.status(200).json({ watchlist });
}

export async function DELETE(id: number, res: NextApiResponse) {
  await prisma.watchlist.delete({
    where: { id },
  });
  return res.status(204);
}
