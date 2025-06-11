import {useEffect, useState} from 'react';

export const useDebounce = <T>(value: T, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeOutID = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeOutID);
  }, [delay, value]);

  return debounceValue;
};
