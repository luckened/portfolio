import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { lazy } from "react";
import { RenderOnViewportEntry } from "./components/RenderOnViewportEntry";
import { JobData } from "../data";

const JobCard = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/JobCard")), 5000);
  });
});

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-xl mb-1">start scrolling to see my work</h1>
        <p className="text-sm font-thin mb-8 p-8 z-auto">
          (I&apos;ve added 5 seconds of loading time on purpose, just for
          showing off react&apos;s lazy load more precisely)
        </p>
        <ArrowDownIcon className="animate-bounce h-20 w-20 text-pink-400" />
      </section>

      <section className="flex flex-col justify-center items-center w-screen">
        {JobData.map((props) => (
          <RenderOnViewportEntry
            className="w-9/12"
            key={props.title}
            threshold={0.2}
          >
            {/* this is absolutely overkill, since all the content
          can be rendered with the page in SSR, but we're having fun here lol */}
            <JobCard {...props} />
          </RenderOnViewportEntry>
        ))}
      </section>
    </>
  );
}
