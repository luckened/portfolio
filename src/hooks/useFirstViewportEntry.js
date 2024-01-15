// probably the best way to do it was using an external
// npm lib but since my time span is limited and I do know
// whats happening under the hood, I've decided to just copy it

// https://medium.com/@pal.amittras/lazy-loading-react-components-on-page-scroll-using-intersection-observer-api-hook-and-wrapper-1a81e4cf1325#5bc3

"use client";

import { useEffect, useRef, useState } from "react";

export const useFirstViewportEntry = (ref, observerOptions) => {
  const [entered, setEntered] = useState(false);
  const observer = useRef(
    typeof window !== "undefined" &&
      new IntersectionObserver(
        ([entry]) => setEntered(entry.isIntersecting),
        observerOptions,
      ),
  );

  useEffect(() => {
    const element = ref.current;
    const obj = observer.current;

    if (entered) {
      obj.disconnect();
      return;
    }

    if (element && !entered) obj.observe(element);

    return () => obj.disconnect;
  }, [entered, observerOptions, ref]);

  return entered;
};
