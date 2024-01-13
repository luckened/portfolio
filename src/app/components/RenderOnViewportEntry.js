"use client";

import { Suspense, useRef } from "react";
import { useFirstViewportEntry } from "../hooks/useFirstViewportEntry";
import { Loading } from "./Loading";

export const RenderOnViewportEntry = ({
  children,
  threshold = 0,
  root = null,
  ...props
}) => {
  const ref = useRef();
  const entered = useFirstViewportEntry(ref, { threshold, root });

  return (
    <div {...props} ref={ref}>
      {entered && <Suspense fallback={<Loading />}>{children}</Suspense>}
    </div>
  );
};
