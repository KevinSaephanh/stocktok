import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="container flex items-center justify-between mx-auto">
      <div className="relative md:px-20 w-full sm:w-3/5 max-w-3xl">
        <h1 className="text-6xl font-bold tracking-wide pb-8 md:pb-12">Title or Welcome Here</h1>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-12 h-12 text-gray-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Search tickers here</span>
        </div>
        <input type="text" className="block p-4 pl-10 w-full" placeholder="Search tickers here" />
      </div>
    </div>
  );
};

export default Home;
