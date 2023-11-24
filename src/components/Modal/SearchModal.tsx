import * as React from 'react';
import { SearchButton } from '../Buttons/SearchButton';
import { List } from '../List/List';

type SearchModalProps = {
  show: boolean;
  handleHideModal: Function;
};

const mockList = [
  { symbol: 'AAPL', name: 'APPLE INC.', logo: '' },
  { symbol: 'SPY', name: 'SPDR S&P 500 ETF TRUST', logo: '' },
  { symbol: 'SPX', name: 'S&P 500', logo: '' },
  { symbol: 'TSLA', name: 'TESLA INC.', logo: '' },
  { symbol: 'BTCUSDT', name: 'BITCOIN / TETHERUS', logo: '' },
  { symbol: 'NVDA', name: 'NVIDIA CORPORATION', logo: '' },
];

export const SearchModal: React.FC<SearchModalProps> = ({
  show,
  handleHideModal,
}) => {
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      {show && (
        <div
          aria-hidden="true"
          className="fade absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-3/5 h-full lg:h-3/5 z-50 outline-none overflow-x-hidden overflow-y-auto"
        >
          <div className="relative p-4 w-auto max-w-6xl pointer-events-none h-full md:h-auto">
            <div className="border-none relative flex flex-col w-full pointer-events-auto bg-clip-padding outline-none text-current bg-white rounded-lg shadow dark:bg-gray-800">
              <div className="flex flex-shrink-0 items-center justify-between pt-4 px-4 border-b border-gray-400 rounded-t-md">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Ticker Search
                </h3>
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={() => handleHideModal()}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="relative p-6">
                <form className="space-y-6" action="#">
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <SearchButton
                        classes="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        path="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      />
                    </div>
                    <input
                      name="search"
                      ref={inputRef}
                      className="pl-10 w-full rounded-lg p-2"
                      placeholder="Search symbol, eg. NVDA"
                      required
                    />
                  </div>
                </form>
              </div>

              <List
                items={mockList}
                getItem={(value, _index) => {
                  const { symbol, name } = value;
                  return (
                    <span className="flex flex-row w-5/6">
                      <img src="" />
                      <p className="w-1/6">{symbol}</p>
                      <p className="3/5">{name}</p>
                    </span>
                  );
                }}
                listClasses="px-6 pb-2"
                itemClasses="cursor-pointer hover:opacity-50 mb-4 flex justify-between font-bold"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
