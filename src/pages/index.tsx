import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="container flex items-center justify-between mx-auto">
      <div className="relative md:px-20 w-full sm:w-3/5 max-w-2xl">
        <h1 className="text-6xl font-bold tracking-wide pb-8 md:pb-12">Title or Welcome Here</h1>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-500"
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
          </div>
          <input
            type="text"
            id="simple-search"
            className="rounded-full block w-full pl-14 p-2.5"
            placeholder="Search tickers here"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
