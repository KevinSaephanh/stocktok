import * as React from 'react';
import Image from 'next/image';
import { SearchButton } from '../components/ui/Buttons/SearchButton';
import { SearchModal } from '../components/ui/Modal/SearchModal';
import { withUrql } from '../graphql/with-urql';
import { getTextColorByPriceDelta } from '../utils/get-text-color-by-price-delta';
import { useQuery } from 'urql';
import { WithUrqlProps } from 'next-urql';
import { queryIndices } from '../graphql/alphavantage/query-indices.gql';

const Home = ({ pageProps }: WithUrqlProps) => {
  const [show, setShow] = React.useState(false);
  const futures = [
    { name: 'S&P 500', price: 12345, priceChange: '+12.02', percentChange: '+1.05%', logo: '' },
    { name: 'Dow Jones', price: 33325, priceChange: '+23.33', percentChange: '+0.65%', logo: '' },
    { name: 'Nasdaq', price: 31345, priceChange: '+111.45', percentChange: '+1.15%', logo: '' },
  ];

  console.log(pageProps);

  return (
    <>
      <div className='h-full flex-center flex-col relative w-full lg:w-2/5 md:w-2/3 md:mx-auto'>
        <section className='relative w-full mb-10'>
          <h1 className='text-left text-4xl font-bold tracking-wide pb-8'>Market Futures</h1>
          <ul className='flex flex-row'>
            {futures.map(({ name, price, priceChange, percentChange, logo }, key) => (
              <li
                className='flex flex-col rounded shadow-md shadow-black dark:shadow-white h-26 w-44 p-2 mr-6'
                key={key}
              >
                <span className='text-xl mb-2'>
                  <Image
                    src='/assets/pepe-business.png'
                    alt='pepe'
                    height={20}
                    width={20}
                    layout='fixed'
                  />
                  <strong className='ml-2'>{name}</strong>
                </span>
                <span className='text-xl'>{price}</span>
                <span>
                  <strong className={`${getTextColorByPriceDelta(priceChange)}`}>
                    {priceChange}
                  </strong>{' '}
                  <strong className={`${getTextColorByPriceDelta(percentChange)}`}>
                    {percentChange}
                  </strong>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className='w-full'>
          <h1 className='text-center text-2xl font-bold tracking-wide pb-8 md:pb-12'>
            This is placeholder text here!
          </h1>
          <div className='relative'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <SearchButton
                classes='w-8 h-8'
                fill='currentColor'
                viewBox='0 0 20 20'
                path='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              />
            </div>
            <input
              type='text'
              readOnly={true}
              className='pl-14 p-2.5'
              placeholder='Start searching here'
              onClick={() => setShow(true)}
            />
          </div>
        </section>
      </div>

      <SearchModal show={show} handleHideModal={() => setShow(false)} />
    </>
  );
};

export async function getServerSideProps() {
  const [result] = await useQuery({
    query: queryIndices,
  });
  const { data, error } = result;

  return {
    props: {
      data,
    },
  };
}

export default withUrql(Home);
