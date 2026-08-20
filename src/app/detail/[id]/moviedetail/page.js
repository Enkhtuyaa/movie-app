"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/app/Features/Header";
import { Footer } from "@/app/Features/Footer";
import { Star } from "@/app/Icons/Star";
import { ArrowRight } from "@/app/Icons/ArrowRight";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export default function MovieDetailPage() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [similarMovie, setSimilarMovie] = useState([]);
  const params = useParams();
  const getSimilar = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    console.log(jsonData, "data");
    return jsonData.results;
  };
  useEffect(() => {
    getSimilar()
      .then((data) => setSimilarMovie(data || []))
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className=" w-[1440px] h-[1050px] flex justify-center  ">
        <div className=" w-[1080px] h-[36px] pt-13 pl-20">
        <p className="text-2xl font-semibold">  More like this</p>
        
        </div>

        {/* <div className="relative flex items-center ">
            <input
              placeholder="See more"
              className=" w-[100px] h-[28px]font-medium text-sm pr-6 bg-transparent focus:outline-none"
              style={{ cursor: "pointer" }}
              // onClick={navigateToMovieDetailPage}
            />
            <span className="absolute right-2.5">
              <ArrowRight />
            </span>
          </div> */}

        <div className="w-[1080px] h-[372px] flex flex-wrap gap-8 rounded-lg">
          {similarMovie?.slice(0, 20).map((movie) => (
            <div key={movie.id} className="w-[190px] h-[372px] rounded-lg ">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* <First1 /> */}
                {/* { <MoviePoster />} */}
              </div>
              <div>
                <div className="flex items-center">
                  <span>
                    <Star />
                  </span>
                  <div className="flex  ">
                    <p className=" font-normal text-base ">
                      {Math.floor(movie?.vote_average) || "6.9"}
                    </p>
                    <span className=" font-normal text-base text-gray-400">
                      /10
                    </span>
                  </div>
                </div>
                <p className="font-normal text-lg">
                  {movie.title || "Gladiator II"}
                </p>
              </div>
            </div>
          ))}
           
        </div>
      </div>

      <Footer />
    </div>
  );
}
