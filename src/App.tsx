import { useEffect, useState } from "react";
import desktopBg from "./assets/images/bg-header-desktop.svg";
import mobileBg from "./assets/images/bg-header-mobile.svg";
import FilterBar from "./components/FilterBar";
import { jobList, JobsProps } from "../data.ts";
import JobList from "./components/JobList.tsx";

const App = () => {
  const [jobs] = useState<JobsProps[]>(jobList);
  const [jobFilter, setJobFilter] = useState<string[]>([]);
  const [toggleBg, setToggleBg] = useState(
    window.innerWidth >= 800 ? desktopBg : mobileBg
  );

  const filteredJobs =
    jobFilter.length > 0
      ? jobs.filter((job) => {
          const tags = [job.role, job.level, ...job.languages, ...job.tools];
          return jobFilter.every((filter) => tags.includes(filter));
        })
      : jobs;

  useEffect(() => {
    const handleResize = () => {
      setToggleBg(window.innerWidth >= 800 ? desktopBg : mobileBg);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen bg-light-grayish-cyan-bg pb-12">
      <img
        src={toggleBg}
        className={`bg-desaturated-dark-cyan w-full max-h-[160px] cm:min-h-[140px] object-cover`}
      />
      <div className="max-w-6xl mx-auto px-6">
        {jobFilter.length > 0 && (
          <FilterBar jobFilter={jobFilter} setJobFilter={setJobFilter} />
        )}
        <JobList
          filteredJobs={filteredJobs}
          jobFilter={jobFilter}
          setJobFilter={setJobFilter}
        />
      </div>
    </div>
  );
};

export default App;
