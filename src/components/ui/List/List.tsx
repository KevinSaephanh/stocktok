import React from 'react';

type ListProps<T> = {
  items: T[];
  classes?: string;
  getItem: (item: T, index: number) => string;
  handleRemove: (item: T) => void;
};

export const List = <T,>({
  items,
  classes,
  getItem,
  handleRemove,
}: React.PropsWithChildren<ListProps<T>>): JSX.Element => (
  <ul className={`${classes}`}>
    {items.map((item, index) => (
      <li className='flex justify-between'>
        <span>{getItem(item, index)}</span>
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
          onClick={() => handleRemove(item)}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </li>
    ))}
  </ul>
);
