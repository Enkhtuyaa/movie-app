"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "../Icons/ArrowRight";
import { Star } from "../Icons/Star";
import { ChevronLeft } from "../Icons/ChevronLeft";
import { ChevronRight } from "../Icons/ChevronRight";
import { usePathname, useRouter } from "next/navigation";
import { UpcomingSkeleton } from "./UpcomingSkeleton.js/page";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export const Upcoming = () => {
  const pathname = usePathname();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [dark, setDark] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
   const [selectedPage, setSelectedPage] = useState(1);

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      { headers: { Authorization: `Bearer ${api_token}` } },
    );

    const jsonData = await response.json();
    return jsonData.results;
  };
  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // console.log(data, "this is my data");

  const router = useRouter();
  const navigateToUpcomingPage = () => {
    router.push("/upcoming");
  };
  const handleMovieClick = (id) => {
    router.push(`/detail/${id}`);
    // console.log(id,"movieid");
  };

  if (loading) {
    return <UpcomingSkeleton />;
  } 
  
  return (
    <div>
      <div className="   flex p-12  flex-col ">
        {" "}
        <div>
          <div className="w-[1277px] h-[36px] flex items-center  p-12 ">
            <div className="flex justify-between items-center w-full">
              <span className=" font-semibold text-2xl">Upcoming</span>
              {pathname !== "/upcoming" && (
                <div className="relative flex items-center px-4">
                  <button
                    className=" w-[100px] h-[28px]font-medium text-sm pr-6 bg-transparent focus:outline-none"
                    style={{ cursor: "pointer" }}
                    onClick={navigateToUpcomingPage}
                  >
                    See more
                  </button>

                  <span className="absolute right-2.5">
                    <ArrowRight />
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className=" w-[1277px] min-h-[910px] flex   flex items-center flex-wrap gap-8 ">
            {loading && <div>Loading...</div>}
            {!loading && errorMessage && <div>{errorMessage}</div>}
            {!loading &&
              !errorMessage &&
              data.slice(0, 10).map((movie) => {
                return (
                  <div
                    key={movie.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleMovieClick(movie.id)}
                  >
                    <div className="flex flex-col ">
                      {/* <p>{movie.id}</p> */}
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        className="w-[229px] h-[340px]  rounded-lg "
                      />
                      <div className="w-[229px] h-[95px] bg-gray-200  rounded-lg flex flex-col">
                        <span className="flex items-center gap-1 ">
                          <Star />
                          <p className="font-medium text-sm">
                            {Math.floor(movie.vote_average)}
                            {/* {movie.vote_average?.toFixed(1)} */}
                          </p>
                          <p className="font-normal text-sm text-gray-400">
                            /10
                          </p>
                        </span>
                        <span className="text-sm font-normal">
                          {movie.title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    
    </div>
  );
};
