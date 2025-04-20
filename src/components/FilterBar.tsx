import removeIcon from "../assets/images/icon-remove.svg";

interface Props {
  jobFilter: string[];
  setJobFilter: (jobFilter: string[]) => void;
}

const FilterBar = ({ jobFilter, setJobFilter }: Props) => {
  const clearFilter = () => {
    setJobFilter([]);
  };

  return (
    <div className="flex items-center justify-between w-full rounded-md px-5 cm:px-10 py-5 bg-white -mt-8 z-10 relative shadow-xl">
      <div className="flex flex-wrap items-center gap-4">
        {jobFilter.map((jf, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-light-grayish-cyan-tablets text-desaturated-dark-cyan py-1 pl-1.5 pr-2 rounded-l font-semibold">
              {jf}
            </div>
            <div
              className="bg-desaturated-dark-cyan p-2.5 rounded-r hover:bg-very-dark-grayish-cyan transition-colors duration-150 ease-in cursor-pointer"
              onClick={() => setJobFilter(jobFilter.filter((f) => f !== jf))}
            >
              <img src={removeIcon} className="w-3" />
            </div>
          </div>
        ))}
      </div>
      <p
        className="text-desaturated-dark-cyan font-semibold hover:underline underline-offset-2 cursor-pointer"
        onClick={clearFilter}
      >
        Clear
      </p>
    </div>
  );
};

export default FilterBar;
