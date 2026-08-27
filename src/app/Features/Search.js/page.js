"use client ";
import { Movie } from "../Icons/Movie";
import { Moon } from "../Icons/Moon";
import { Search } from "../Icons/Search";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export default function SearchPage() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const getSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    // console.log(jsonData, "data");
    return jsonData.results;
  };

  useEffect(() => {
    getSearch()
      .then((data) => setSearchValue(data || []))
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const router = useRouter();
  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="w-360 h-14.75 bg-white flex justify-center">
        <div className="w-7xl h-9 bg-white flex justify-between items-center">
          <div className="flex gap-2 cursor-pointer">
            <Movie onClick={navigateToHome} /> Movie Z
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="relative ">
              <button
                type="button"
                className="w-[140px] h-9 rounded-md text-black bg-white px-3 text-sm border border-gray-200 shadow-sm focus:outline-none flex items-center justify-between gap-1 cursor-pointer "
              ></button>
            </div>
            <div className="relative flex justify-center items-center gap-10">
              <input
                // onClick={() => setIsWrite(!isWrite)}
                placeholder="Search..."
                className="w-[379px] h-[36px] rounded-lg pl-10 pr-3 shadow-sm focus:outline-none focus:ring-2  focus:ring-blue-500"
              />
              <span className="absolute left-2.5">
                <Search />
              </span>
              {/* {isWrite && (
                <div className="absolute w-full h-[116px] rounded-lg">
                  <div className="w-[553px] h-[116px] rounded-lg"></div>
                </div>
              )} */}
            </div>
          </div>
          <span className="w-9 h-9 rounded-md flex justify-center items-center shadow-sm focus:outline-none focus:ring-2 ">
            <Moon />
          </span>
        </div>
      </div>
    </div>
  );
}
