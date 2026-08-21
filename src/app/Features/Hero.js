import { Star } from "../Icons/Star";
import { Vector } from "../Icons/Vector";
import { ChevronRight } from "../Icons/ChevronRight";
import { useEffect, useState } from "react";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export const Hero = () => {
  const [playingMovie, setPlayingMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    console.log(jsonData, "jsonData");
    return jsonData.results || [];
  };
  useEffect(() => {
    getData()
      .then((movie) => setPlayingMovie(movie))
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-6 ">
      {playingMovie?.slice(0, 1).map((movie) => (
        <div
          className=" max-auto  h-full relative flex items-center p-36  "
          key={movie.id}
        >
          <img
            // src="official.jpg"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            className=" absolute inset-0 w-[1440px] h-[600px]   "
          />
          {/* <Picture className="absolute inset-0 w-full h-full object-cover " /> */}
          <div className="  w-full relative z-10 flex justify-between items-center">
            <div className=" w-101 h-66 relative z-10 text-white font-bold ">
              <p className="text-base font-semibold">Now playing:</p>
              <p className="font-bold text-4xl">
                {/* Wicked */}
                {movie.title}
              </p>
              <div className="flex  items-center">
                <Star />
                <div className="flex items-center">
                  <span className="text-base text-lg">6.9</span>
                  <span className="font-normal text-sm text-gray-400">/10</span>
                </div>
              </div>
              {/* <span className="flex text-xs py-4 ">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.
              </span> */}
              <span className="font-normal text-sm">{movie?.overview}</span>
              <Vector />
              <div className="relative flex  items-center">
                <button className="w-[145px] h-[40px] bg-white rounded-md font-medium text-sm text-black rounded-lg pl-8 pr-3">
                  Watch Trailer
                </button>
                <span className="absolute left-2.5">
                  <Vector />
                </span>
              </div>
            </div>
            <div className="w-[40px] h-[40px] bg-white rounded-full  flex items-center justify-center ">
              <ChevronRight />
            </div>
          </div>
          <div className="flex absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            <button className=" min-w-[8px] h-[8px] rounded-full bg-gray-600">
              {" "}
            </button>
            <button className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
              {" "}
            </button>
            <button className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
              {" "}
            </button>
            <button className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
              {" "}
            </button>
            <button className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
              {" "}
            </button>
            <button className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
              {" "}
            </button>
            <button className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
              {" "}
            </button>
            <button className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
              {" "}
            </button>
            <button className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
              {" "}
            </button>
            <button className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
              {" "}
            </button>
            <button className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
              {" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
