"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "../Icons/ArrowRight";
import { Star } from "../Icons/Star";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export const TopRated = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3//movie/top_rated?language=en-US&page=1",
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
  console.log(data, "this is my data");
  return (
    <div>
      <div className="   flex p-12  flex-col ">
        {" "}
        <div>
          <div className="w-[1277px] h-[36px] flex items-center  p-12 ">
            <div className="flex justify-between items-center w-full">
              <span className=" font-semibold text-2xl">Popular</span>
              <div className="relative flex items-center px-4">
                <input
                  placeholder="See more"
                  className=" w-[100px] h-[28px]font-medium text-sm pr-6 bg-transparent focus:outline-none"
                />
                <span className="absolute right-2.5">
                  <ArrowRight />
                </span>
              </div>
            </div>
          </div>

          <div className=" w-[1277px] min-h-[910px] flex   flex items-center flex-wrap gap-8 ">
            {loading && <div>Loading...</div>}
            {!loading && errorMessage && <div>{errorMessage}</div>}
            {!loading &&
              !errorMessage &&
              data.map((movie) => {
                return (
                  <div key={movie.id}>
                    <div className="flex flex-col ">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        className="w-[229px] h-[340px]  rounded-lg object-cover"
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

