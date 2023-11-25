import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface RedditPost {
  subreddit: string;
  title: string;
  thumbnail: string;
  created: number;
  author: string;
  link: string;
  selftext?: string;
}

interface SeekingAlphaResponse {
  publishedOn: string;
  gettyImageUrl?: string;
  title: string;
  link: string;
}

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const symbol = req.query.sym?.toString();
  if (!symbol) {
    throw new Error('Ticker symbol must be provided');
  }

  const posts = getRedditDiscussions(symbol);
  const news = getSeekingAlphaNews(symbol);

  return res.status(200).json({ posts, ...news });
}

export async function getRedditDiscussions(symbol: string) {
  const redditQueryParams = `q=$${symbol}&limit=2&sort=hot&t=week&restrict_sr=true&type=link`;
  const subreddits = [
    'wallstreetbets',
    'options',
    'stocks',
    'daytrading',
    'pennystocks',
  ];
  const posts: RedditPost[] = [];

  for (const s of subreddits) {
    const redditUrl = process.env['REDDIT_URL'];
    const url = `${redditUrl}/r/${s}/search.json?${redditQueryParams}`;
    const { data } = await axios.get(url);

    if (data.children?.length === 2) {
      const [first, second] = data.children;
      [first, second].forEach((item) => {
        const {
          subreddit,
          title,
          thumbnail,
          created,
          author,
          permalink,
          selftext,
        } = item.data;
        posts.push({
          subreddit,
          title,
          thumbnail,
          created,
          author,
          selftext,
          link: redditUrl + permalink,
        });
      });
    }
  }

  return posts;
}

export async function getSeekingAlphaNews(symbol: string) {
  const analyis = await requestSeekingAlpha(symbol, '/analysis/v2/list?');
  const pressRelease = await requestSeekingAlpha(
    symbol,
    '/press-releases/v2/list?'
  );
  return { analyis, pressRelease };
}

async function requestSeekingAlpha(symbol: string, uri: string) {
  const url = `${process.env['SEEKING_ALPHA_URL']}/${uri}/${symbol}?size=5&number=1`;
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': process.env['RAPID_API_KEY'],
      'X-RapidAPI-Host': process.env['RAPID_API_HOST'],
    },
  });
  const res: SeekingAlphaResponse[] = [];

  data.forEach((item: any) => {
    if (item) {
      const { attributes, relationships } = item;
      const { publishedOn, gettyImageUrl, title } = attributes;
      res.push({
        publishedOn,
        gettyImageUrl,
        title,
        link: 'https://www.seekingalpha.com' + relationships.links.self,
      });
    }
  });

  return res;
}
