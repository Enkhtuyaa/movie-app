import { Movie } from "../Icons/Movie";
import { Moon } from "../Icons/Moon";
import { Search } from "../Icons/Search";
import { useRouter } from "next/navigation";
import { Dropdown } from "../Icons/Dropdown";
import { useState } from "react";

const GENRES = [
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Science-Fiction",
  "Documentary",
  "Animation",
  "Crime",
  "Family",
  "Music",
  "Fantasy",
  "Romance",
  "Adventure",
  "History",
  "Mystery",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Genre");
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
                list="genre-options"
                placeholder="Genre"
                className="w-[120px] h-9 rounded-md text-black bg-white pl-8 pr-3 text-sm border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-10 px-3 bg-white border border-gray-200 rounded-md text-sm text-black flex items-center justify-between shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>{selected}</span>
                <span className="text-xs text-gray-400">▼</span>
              </button>

              {/* Нээгдэх жагсаалт - Энд өндөр, өргөнийг өөрийнхөөрөө заана */}
              {isOpen && (
                <ul className="absolute left-0 top-11 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                  {GENRES.map((genre) => (
                    <li
                      key={genre}
                      onClick={() => {
                        setSelected(genre);
                        setIsOpen(false);
                      }}
                      /* Энд h-10 (өндөр), px-3 (өргөний зай) гэх мэт CSS өгнө */
                      className="h-10 px-3 flex items-center text-sm hover:bg-blue-50 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              )}
              <span className="absolute left-2.5 text-xs text-gray-500">
                <Dropdown />
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
