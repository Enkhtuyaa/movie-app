import { Movie } from "../Icons/Movie";
import { Genre } from "../Icons/Genre";
import { Moon } from "../Icons/Moon";
import { Search } from "../Icons/Search";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const navigateToHome = () => {
    router.push("/");
  };
  return (
    <div>
      <div className="w-360 h-14.75 bg-white flex justify-center">
        <div className="w-7xl h-9 bg-white flex justify-between items-center">
          <div className="flex gap-2 ">
            <Movie onClick={navigateToHome} /> Movie Z
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="relative flex justify-center items-center">
              <input
                placeholder="Genre"
                className="w-[97px] h-9 rounded-md text-black bg-white pl-8 pr-3 text-sm border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-2.5 text-xs text-gray-500">
                <Genre />
              </span>
            </div>
            <div className="relative flex justify-center items-center gap-10">
              <input
                placeholder="Search..."
                className="w-[379px] h-[36px] rounded-lg pl-10 pr-3 shadow-sm focus:outline-none focus:ring-2  focus:ring-blue-500"
              />
              <span className="absolute left-2.5">
                <Search />
              </span>
            </div>
          </div>
          <span className="w-9 h-9 rounded-md flex justify-center items-center shadow-sm focus:outline-none focus:ring-2 ">
            <Moon />
          </span>
        </div>
      </div>
    </div>
  );
};
