import * as React from "react";

type SvgButtonProps = {
  index?: number;
  path: string;
  handleClick: Function;
};

export const SvgButton: React.FC<SvgButtonProps> = ({ index, path, handleClick }) => {
  return (
    <>
      <svg
        className="block h-8 w-8 rounded-full cursor-pointer hover:text-blue-500 dark:hover:text-slate-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        onClick={() => handleClick(index)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
      </svg>
    </>
  );
};
