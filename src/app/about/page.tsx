export default function Page() {
  return (
    <>
      <section className="heading text-center h-24 md:h-32">
        <h1 className="text-4xl md:text-6xl">
          We are <strong className="text-sky-400">StockTok</strong>
        </h1>
      </section>
      <section className="content w-full md:w-2/4 mx-auto">
        <div className="about pb-8 mb-6 border-b-2 border-b-white">
          <h2>About</h2>
          <span className="text-md md:text-lg">
            StockTok is a platform that aggregates stock/market information from
            multiple sources. Why pull up a bunch of tabs/apps when you can get
            most, if not all of the information you need regarding a stock in
            one single website. Take advantage of the many features we offer
            from general stock price/information to breaking news for companies.
          </span>
        </div>
        <div className="features">
          <h2 className="text-center">APIs</h2>
          <ul className="flex flex-col md:flex-row justify-between">
            <li className="mb-4 md:mb-0 md:mr-4">
              <h3>Alpha Vantage</h3>
              <p>
                Get the latest information on a stock ticker. Alpha Vantage
                offers real time data for stocks, commodities, forex,
                cryptocurrency, etc.
              </p>
            </li>
            <li className="mb-4 md:mb-0 md:mr-4">
              <h3>Reddit</h3>
              <p>
                As one of the biggest social media platforms, Reddit allows
                users to connect discuss any topic. With subreddits dedicated to
                trading and specific stocks, users can get a general consensus
                on the bullishness/bearishenss of a particular stock, sector,
                etc.
              </p>
            </li>
            <li>
              <h3>Seeking Alpha</h3>
              <p>
                Seeking Alpha connects investors with one another to learn about
                and inform others of their investing ideas and strategies. Keep
                up to date with the latest news on stocks and the market in
                general.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
