import Head from 'next/head';
import * as React from 'react';

const metadata = {
  title: 'StockTok',
  author: 'Kevin Saephanh',
  headerTitle: 'StockTok',
  description: 'Stock site',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://kevinsaephanh.com/',
  siteRepo: 'https://github.com/KevinSaephanh/stocktok',
  locale: 'en-US',
  openGraph: {
    title: 'Kevin Saephanh',
    description: '',
    type: 'website',
    url: 'https://kevinsaephanh.com/',
    siteName: 'Kevin Saephanh',
    images: [],
  },
  twitter: {
    card: 'summary_large_image',
    handle: 'KevCoolio',
    site: 'https://twitter.com/KevCoolio',
    description: '',
  },
};

type SeoProps = {
  title?: string;
  description?: string;
  robots?: string;
  twImage?: string;
};

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  robots,
  twImage,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta key="og:type" property="og:type" content={'website'} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta key="og:locale" property="og:locale" content={metadata.locale} />
      {metadata.openGraph.images.length
        ? metadata.openGraph.images.map(({ url }) => (
            <meta property="og:image" content={url} key={url} />
          ))
        : null}
      <meta
        key="twitter:card"
        name="twitter:card"
        content={metadata.twitter.card}
      />
      <meta
        key="twitter:site"
        name="twitter:site"
        content={metadata.twitter.site}
      />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={metadata.twitter.handle}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <meta key="robots" name="robots" content={robots ?? 'index,follow'} />
      <meta
        key="googlebot"
        name="googlebot"
        content={robots ?? 'index,follow'}
      ></meta>
    </Head>
  );
};
