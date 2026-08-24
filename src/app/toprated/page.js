"use client";
import { Header } from "../Features/Header";
import { Footer } from "../Features/Footer";
import { Star } from "../Icons/Star";
import { ArrowRight } from "../Icons/ArrowRight";
import { ChevronLeft } from "../Icons/ChevronLeft";
import { ChevronRight } from "../Icons/ChevronRight";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export default function TopRatedPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const pathname = usePathname();
  const [selectedPage, setSelectedPage] = useState(1);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3//movie/top_rated?language=en-US&page=${selectedPage}`,
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
  }, [selectedPage]);
  // console.log(data, "this is my data");
  const handlePreviousButton = () => {
    const page = selectedPage === 1 ? 1 : selectedPage - 1;
    setSelectedPage(page);
  };
  const handleNextButton = () => {
    setSelectedPage(selectedPage + 1);
  };
  const handleSecondButton = (page) => {
    setSelectedPage(page);
  };
  console.log(setSelectedPage)
  const router = useRouter();
  const navigateTopRatedPage = () => {
    router.push("/toprated");
  };
  const handleMovieClick = (id) => {
    router.push(`/detail/${id}`);
  };
  return (
    <div>
      <Header />
      <div className="   flex p-12  flex-col ">
        {" "}
        <div>
          <div className="w-[1277px] h-[36px] flex items-center  p-12 ">
            <div className="flex justify-between items-center w-full">
              <span className=" font-semibold text-2xl">TopRated</span>
              {pathname !== "/toprated" && (
                <div className="relative flex items-center px-4">
                  <button
                    className=" w-[100px] h-[28px]font-medium text-sm pr-6 bg-transparent focus:outline-none"
                    style={{ cursor: "pointer" }}
                    onClick={navigateTopRatedPage}
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
      <div className="w-[1280px] h-[40px]  flex justify-end ">
        <div className="w-[294px] h-[40px] flex gap-2 ">
          <button
            onClick={handlePreviousButton}
            className="w-[114px] h-[40px] font-medium text-sm text-gray-400 flex items-center gap-2  cursor-pointer"
          >
            <ChevronLeft />
            Previous
          </button>
          <button className="w-[40px] h-[40px] rounded-md  bg-amber-400 font-medium text-sm cursosr-pointer ">
            {" "}
            {selectedPage}
          </button>
          <button
            onClick={() => handleSecondButton(selectedPage + 1)}
            className="w-[40px] h-[40px] rounded-md  bg-amber-400 font-medium text-sm cursor-pointer "
          >
            {" "}
            {selectedPage + 1}
          </button>
          <button className="w-[40px] h-[40px] rounded-md  bg-amber-400 font-medium text-sm ">
            {" "}
            ...{" "}
          </button>
          <button
            onClick={() => handleSecondButton(selectedPage + 4)}
            className="w-[40px] h-[40px] rounded-md  bg-amber-400 font-medium text-sm cursor-pointer"
          >
            {" "}
            {selectedPage + 4}
          </button>
          <button
            onClick={handleNextButton}
            className="font-medium text-sm text-gray-400 flex items-center gap-2 cursor-pointer"
          >
            <ChevronRight />
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
