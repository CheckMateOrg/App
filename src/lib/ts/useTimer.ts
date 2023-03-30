const useTimer = (cb: Function, ms: number = 1000) => {
  let timer: number | undefined;

  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, ms);
  };
};

export default useTimer;
