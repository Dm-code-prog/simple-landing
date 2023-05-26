import { useEffect, useRef } from "react";

export const useEffectWithoutFirstRender = (cb, deps) => {
  const isFirstTime = useRef(true);

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    } else {
      return cb();
    }
  }, deps);
};
