"use client";
import { Movie } from "@/app/Icons/Movie";
import { Moon } from "@/app/Icons/Moon";
import { Search } from "@/app/Icons/Search";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Footer } from "@/app/Features/Footer";
import { ChevronRight } from "@/app/Icons/ChevronRight";
import { ChevronLeft } from "@/app/Icons/ChevronLeft";
import { Star } from "@/app/Icons/Star";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export default function SearchPage() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchValue, setSearchValue] = useState(""); // Хайлтын текст
  const [genre, setGenre] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const [selectedGenreIds, setSelectedGenreIds] = useState([]);
  const [page, setPage] = useState(1);

  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  // Жанрын жагсаалт татах
  const getGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      { headers: { Authorization: `Bearer ${api_token}` } }
    );
    const jsonData = await response.json();
    return jsonData.genres;
  };

  // Текстээр хайлт хийх
  const searchMovies = async (query, pageNum) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&language=en-US&page=${pageNum}`,
      { headers: { Authorization: `Bearer ${api_token}` } }
    );
    const jsonData = await response.json();
    return jsonData;
  };

  // Жанраар шүүж кино татах
  const getMoviesByGenre = async (genreIds, pageNum) => {
    const genreParam =
      genreIds.length > 0 ? `&with_genres=${genreIds.join(",")}` : "";
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en${genreParam}&page=${pageNum}`,
      { headers: { Authorization: `Bearer ${api_token}` } }
    );
    const jsonData = await response.json();
    return jsonData;
  };

  // Анх ачаалагдахад жанрын жагсаалт авах
  useEffect(() => {
    getGenres()
      .then((data) => setGenre(data || []))
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => setLoading(false));
  }, []);

  // Хайлтын текст эсвэл жанр, хуудас өөрчлөгдөх бүрд кинонуудыг шинэчлэх
  useEffect(() => {
    setLoading(true);

    if (searchValue.trim() !== "") {
      // Хэрэв хайх хэсэгт текст байвал хайлтын API дуудна
      const delayDebounceFn = setTimeout(() => {
        searchMovies(searchValue, page)
          .then((data) => {
            setGenreMovie(data.results || []);
            setTotalResults(data.total_results || 0);
          })
          .catch(() => setErrorMessage("MOVIE API ERROR"))
          .finally(() => setLoading(false));
      }, 400);

      return () => clearTimeout(delayDebounceFn);
    } else {
      // Хайх хэсэг хоосон байвал Жанраар шүүх API дуудна
      getMoviesByGenre(selectedGenreIds, page)
        .then((data) => {
          setGenreMovie(data.results || []);
          setTotalResults(data.total_results || 0);
        })
        .catch(() => setErrorMessage("MOVIE API ERROR"))
        .finally(() => setLoading(false));
    }
  }, [searchValue, selectedGenreIds, page]);

  const handlePreviousButton = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextButton = () => {
    setPage((prev) => prev + 1);
  };

  const handleGenreSelect = (id) => {
    setSelectedGenreIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setPage(1);
  };

  const handleMovieClick = (id) => {
    router.push(`/detail/${id}`);
  };

  const selectedGenreNames = genre
    .filter((g) => selectedGenreIds.includes(g.id))
    .map((g) => g.name)
    .join(", ");

  return (
    <div>
      <div className="w-360 h-14.75 bg-white flex justify-center">
        <div className="w-7xl h-9 bg-white flex justify-between items-center">
          <div className="flex gap-2 cursor-pointer" onClick={navigateToHome}>
            <Movie /> Movie Z
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="relative">
              <button
                type="button"
                className="w-[140px] h-9 rounded-md text-black bg-white px-3 text-sm border border-gray-200 shadow-sm focus:outline-none flex items-center justify-between gap-1 cursor-pointer"
              >
                Genre
              </button>
            </div>
            <div className="relative flex justify-center items-center gap-10">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  setPage(1); // Хайх үед 1-р хуудаснаас эхлүүлнэ
                }}
                placeholder="Search..."
                className="w-[379px] h-[36px] rounded-lg pl-10 pr-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
              />
              <span className="absolute left-2.5">
                <Search />
              </span>
            </div>
          </div>
          <span className="w-9 h-9 rounded-md flex justify-center items-center shadow-sm focus:outline-none focus:ring-2">
            <Moon />
          </span>
        </div>
      </div>

      <div className="w-[1280px] h-[1257px] mt-12 mx-20">
        <div className="w-[1280px] h-[36px] font-semibold text-3xl">
          Search results
        </div>
        <div className="w-[1280px] h-[1189px] mt-8 flex gap-10">
          <div className="w-[387px] h-[352px]">
            <div className="py-10">
              <p className="font-semibold text-2xl">Search by genre</p>
              <p className="font-normal text-base">
                See lists of movies by genre
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {genre.map((item) => {
                const isSelected = selectedGenreIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleGenreSelect(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-black text-white border-black"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item.name}</span>
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {isSelected ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      )}
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white w-[806px] h-[1189px]">
            <div className="my-6 px-4 flex justify-between items-center border-b pb-4">
              <h2 className="text-xl font-bold">
                {searchValue.trim()
                  ? `Results for "${searchValue}"`
                  : selectedGenreIds.length > 0
                  ? `${selectedGenreNames} titles`
                  : "All Movies"}
              </h2>
              <span className="text-gray-500 font-medium">
                {totalResults.toLocaleString()} titles
              </span>
            </div>

            <div className="flex flex-wrap gap-4 rounded-lg justify-center">
              {genreMovie?.map((movie) => (
                <div
                  onClick={() => handleMovieClick(movie.id)}
                  key={movie.id}
                  className="w-[229px] h-[439px] rounded-lg flex flex-col cursor-pointer"
                >
                  <div className="h-[340px]">
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                          : "/placeholder.png"
                      }
                      alt={movie.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-100 w-[229px] h-[85px] gap-2 flex flex-col p-3 rounded-b-lg">
                    <div className="flex items-center gap-1">
                      <Star />
                      <p className="font-normal text-sm">
                        {movie.vote_average
                          ? movie.vote_average.toFixed(1)
                          : "0.0"}
                        <span className="text-gray-400">/10</span>
                      </p>
                    </div>

                    <div className="flex items-center">
                      <p className="font-medium text-sm truncate">
                        {movie.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1280px] h-[40px] flex justify-end my-8">
        <div className="w-[294px] h-[40px] flex gap-2">
          <button
            onClick={handlePreviousButton}
            disabled={page === 1}
            className="px-3 py-2 text-sm font-medium text-gray-600 disabled:opacity-50 flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft /> Previous
          </button>
          <button
            onClick={() => setPage(page)}
            className="w-10 h-10 rounded-md bg-amber-400 font-semibold text-sm"
          >
            {page}
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="w-10 h-10 rounded-md bg-gray-100 hover:bg-amber-200 font-medium text-sm cursor-pointer"
          >
            {page + 1}
          </button>
          <button
            onClick={() => setPage(page + 2)}
            className="w-10 h-10 rounded-md bg-gray-100 hover:bg-amber-200 font-medium text-sm cursor-pointer"
          >
            {page + 2}
          </button>
          <button
            onClick={handleNextButton}
            className="px-3 py-2 text-sm font-medium text-gray-600 flex items-center gap-1 cursor-pointer"
          >
            Next <ChevronRight />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}