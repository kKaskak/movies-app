import { useEffect } from "react";

const useScroll = (callback) => {
  const debounce = (fn, delay) => {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null; // this enables the function to be run in the future.
      }, delay);
    };
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      let formula = scrollTop >= scrollHeight - clientHeight * 2;
      if (formula) {
        callback();
      }
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
};

export default useScroll;
