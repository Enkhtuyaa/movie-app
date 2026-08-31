import { Star } from "../Icons/Star";
import { Vector } from "../Icons/Vector";
import { ChevronRight } from "../Icons/ChevronRight";
import { useEffect, useState } from "react";
import HeroSkeleton from "./HeroSkeleton.js/page";
const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export const Hero = () => {
  const [playingMovie, setPlayingMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [trailerKey, setTrailerKey] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${selectedPage}`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    // console.log(jsonData, "jsonData");
    return jsonData.results || [];
  };

  const handleWatchTrailer = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        { headers: { Authorization: `Bearer ${api_token}` } },
      );
      const data = await response.json();
      const trailer = data.results?.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube",
      );
      if (trailer) {
        setTrailerKey(trailer.key);
        setIsModalOpen(true);
      } else {
        alert ("Трейлер олдсонгүй");
      }
    } catch (error) {
      console.log("Trailer fetch error:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData()
      .then((movie) => setPlayingMovie(movie))
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handlePreviousButton = () => {
    const page = selectedPage === 1 ? 1 : selectedPage - 1;
    setSelectedPage(page);
  };
  const handleNextButton = () => {
    setSelectedPage(selectedPage + 1);
  };

  if (loading) {
    return <HeroSkeleton />;
  }
 
  return (
    <div className="pt-6  relative">
      <div className="flex overflow-x-auto snap-x snap-mandatory w-full scrollbar-hide ">
        {playingMovie?.slice(0, 10).map((movie) => (
          <div
            className=" w-full  h-full object-cover relative flex items-center p-36 shrink-0 snap-center  "
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
                    <span className="font-normal text-sm text-gray-400">
                      /10
                    </span>
                  </div>
                </div>
                {/* <span className="flex text-xs py-4 ">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.
              </span> */}
                <span className="font-normal text-sm">{movie?.overview}</span>
             
                <div className="relative flex  items-center pt-4">
                  <button
                    onClick={() => handleWatchTrailer(movie?.id)}
                    className="w-[145px] h-[40px] bg-white rounded-md font-medium text-sm text-black rounded-lg pl-8 pr-3 cursor-pointer"
                  >
                    Watch Trailer
                  </button>
                  <span className="absolute left-2.5">
                    <Vector />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <button
              onClick={handlePreviousButton}
              className=" min-w-[8px] h-[8px] rounded-full bg-gray-600">
                {" "}
              </button>
              <button 
              onClick={handleNextButton}
              className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
                {" "}
              </button>
              <button
              onClick={ ()=> handleNextButton}
              className="min-w-[8px] h-[8px] rounded-full  bg-gray-600">
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            {/* Хаах товчлуур */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white bg-gray-800/80 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center z-10 cursor-pointer"
            >
              ✕
            </button>

            {/* YouTube видео тоглуулагч */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="YouTube movie trailer"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
