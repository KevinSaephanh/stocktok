import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

const metadata = {
  title: '',
  site: '',
  description: '',
  url: '',
  type: 'website',
  robots: 'follow, index',
  image: '',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  children?: React.ReactNode;
} & Partial<typeof metadata>;

export const Seo: React.FC<SeoProps> = (props) => {
  const router = useRouter();
  const meta = {
    ...metadata,
    ...props,
  };
  meta['title'] = props.templateTitle ? `${props.templateTitle} | ${meta.site}` : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />

      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.site} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@th_clarence" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {props.children}
    </Head>
  );
};
