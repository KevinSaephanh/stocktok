import * as React from "react";
import { SearchButton } from "../buttons/SearchButton";

type SearchModalProps = {
  handleHideModal: Function;
};

export const SearchModal: React.FC<SearchModalProps> = ({ handleHideModal }) => {
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    >
      <div className="relative p-4 w-auto max-w-6xl pointer-events-none h-full md:h-auto">
        <div className="border-none relative flex flex-col w-full pointer-events-auto bg-clip-padding outline-none text-current bg-white rounded-lg shadow dark:bg-gray-700">
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
                  className="pl-10 themed-text w-full rounded-lg p-2"
                  placeholder="Search symbol, eg. NVDA"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
