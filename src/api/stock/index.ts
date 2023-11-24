import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const stocks = [];

  for (const s of req.body.symbols) {
    const url = `${process.env['ALPHA_VANTAGE_URL']}?function=GLOBAL_QUOTE&symbol=${s}&apikey=${process.env['ALPHA_VANTAGE_API_KEY']}`;
    const quote = (await axios.get(url)).data['GLOBAL_QUOTE'];
    stocks.push({
      symbol: quote['01. symbol'],
      open: quote['02. open'],
      high: quote['03. high'],
      low: quote['04. low'],
      price: quote['05. price'],
      volume: quote['06. volume'],
      previousClose: quote['08. previous close'],
      change: quote['09. change'],
      changePercent: quote['10. change percent'],
    });
  }

  return res.status(200).json({ stocks });
}
