const windowIsDefined = typeof window !== 'undefined';

export const setLocalStorageItem = (name: string, value: string) => {
  if (windowIsDefined) localStorage.setItem(name, value);
};

export const getLocalStorageItem = (name: string) => {
  return windowIsDefined ? localStorage.getItem(name) : null;
};
