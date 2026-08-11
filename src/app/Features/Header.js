import { Movie } from "../Icons/Movie";
import { Genre } from "../Icons/Genre";
import { Moon } from "../Icons/Moon";
import { Search } from "../Icons/Search";
export const Header = () => {
  return (
    <div>
      <div className="w-360 h-14.75 bg-white flex justify-center">
        <div className="w-7xl h-9 bg-white flex justify-between items-center">
          <div className="flex gap-2">
            <Movie /> Movie Z
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="relative flex justify-center items-center  ">
              <input
                placeholder="Genre"
                className="w-[97px] h-9 rounded-md text-black bg-white  pl-8 pr-3 text-sm "
              />
              <span className="absolute left-2.5  text-xs text-gray-500">
                <Genre />
              </span>
            </div>
            <div className="relative flex justify-center items-center gap-10">
              <input 
              placeholder="Search..." 
              className="w-[379px] h-[36px] rounded-lg pl-10 pr-3"
              />
              <span className="absolute left-2.5">
                <Search/>
              </span>
            </div>
          </div>
          <span className="w-9 h-9 border rounded-md flex justify-center items-center">
            <Moon />
          </span>
        </div>
      </div>
    </div>
  );
};
