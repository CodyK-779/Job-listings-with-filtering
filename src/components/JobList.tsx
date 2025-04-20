import { JobsProps } from "../../data.ts";

interface Props {
  filteredJobs: JobsProps[];
  jobFilter: string[];
  setJobFilter: (filter: string[]) => void;
}

const tagstyles =
  "py-1 px-1.5 rounded font-semibold hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan-tablets transition-colors duration-150 ease-in cursor-pointer";

const JobList = ({ filteredJobs, jobFilter, setJobFilter }: Props) => {
  const selectedTags = (tag: string) => {
    return jobFilter.includes(tag)
      ? "bg-desaturated-dark-cyan text-light-grayish-cyan-tablets"
      : "bg-light-grayish-cyan-tablets text-desaturated-dark-cyan";
  };

  const handleFilter = (tag: string) => {
    if (!jobFilter.includes(tag)) {
      setJobFilter([...jobFilter, tag]);
    }
  };

  return (
    <div className="flex flex-col gap-12 cm:gap-6 mt-20 cm:mt-10">
      {filteredJobs.map((fj) => (
        <div
          key={fj.id}
          className={`flex flex-col cm:flex-row items-start justify-start gap-4 cm:items-center cm:justify-between bg-white py-6 px-6 cm:px-8 rounded-md shadow-lg relative ${
            fj.featured && "border-l-[5px] border-desaturated-dark-cyan"
          }`}
        >
          <div className="flex gap-5 pt-3.5 cm:pt-0 pb-4 border-b w-full cm:w-auto border-desaturated-dark-cyan cm:pb-0 cm:border-none">
            <img
              src={fj.logo}
              className="size-14 cm:size-[70px] absolute cm:static top-[-30px] left-5"
            />
            <div className="flex flex-col">
              <div className="flex items-center mb-1.5 cm:mb-1">
                <p className="font-semibold text-lg text-desaturated-dark-cyan mr-3.5">
                  {fj.company}
                </p>
                {fj.new && (
                  <div className="text-white font-medium text-xs bg-desaturated-dark-cyan flex items-center px-2 pt-1 pb-0.5 rounded-full mr-2">
                    NEW!
                  </div>
                )}
                {fj.featured && (
                  <div className="text-white font-medium text-xs bg-very-dark-grayish-cyan flex items-center px-2 pt-1 pb-0.5 rounded-full">
                    FEATURED
                  </div>
                )}
              </div>
              <p className="font-bold text-very-dark-grayish-cyan text-xl mb-1 cm:mb-0.5">
                {fj.position}
              </p>
              <div className="flex items-center gap-2 min-[500px]:gap-3.5 text-dark-grayish-cyan font-medium">
                <p>{fj.postedAt}</p>
                <p>•</p>
                <p>{fj.contract}</p>
                <p>•</p>
                <p>{fj.location}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div
              className={`${tagstyles} ${selectedTags(fj.role)}`}
              onClick={() => handleFilter(fj.role)}
            >
              {fj.role}
            </div>
            <div
              className={`${tagstyles} ${selectedTags(fj.level)}`}
              onClick={() => handleFilter(fj.level)}
            >
              {fj.level}
            </div>
            {fj.languages.map((fl) => (
              <div
                key={fl}
                className={`${tagstyles} ${selectedTags(fl)}`}
                onClick={() => handleFilter(fl)}
              >
                {fl}
              </div>
            ))}
            {fj.tools.length > 0 &&
              fj.tools.map((ft) => (
                <div
                  key={ft}
                  className={`${tagstyles} ${selectedTags(ft)}`}
                  onClick={() => handleFilter(ft)}
                >
                  {ft}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
