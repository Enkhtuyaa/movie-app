"use client";
import { Header } from "@/app/Features/Header";
import { Footer } from "@/app/Features/Footer";
import { useState, useEffect } from "react";
import { Star } from "@/app/Icons/Star";
import { ChevronRight } from "@/app/Icons/ChevronRight";
import { ChevronLeft } from "@/app/Icons/ChevronLeft";
import { useRouter } from "next/navigation";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export default function GenreDetailPage() {
  const [genre, setGenre] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);
  const [totalResults, setTotalResults] = useState(0); // Нийт олдсон киноны тоо
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedGenreIds, setSelectedGenreIds] = useState([]); // Олон жанр хадгалах Array
  const [page, setPage] = useState(1);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      { headers: { Authorization: `Bearer ${api_token}` } }
    );
    const jsonData = await response.json();
    return jsonData.genres;
  };

  const getGenre = async (genreIds) => {
    // Жанруудыг таслалаар холбож API руу явуулна (d.h. "18,28")
    const genreParam =
      genreIds.length > 0 ? `&with_genres=${genreIds.join(",")}` : "";
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en${genreParam}&page=${page}`,
      { headers: { Authorization: `Bearer ${api_token}` } }
    );
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    getData()
      .then((data) => setGenre(data || []))
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getGenre(selectedGenreIds)
      .then((data) => {
        setGenreMovie(data.results || []);
        setTotalResults(data.total_results || 0); // Нийт үр дүнгийн тоог хадгалах
      })
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => setLoading(false));
  }, [selectedGenreIds, page]);

  const handlePreviousButton = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextButton = () => {
    setPage((prev) => prev + 1);
  };

  // Олон жанр сонгох/цуцлах логик
  const handleGenreSelect = (id) => {
    setSelectedGenreIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setPage(1);
  };

  const router = useRouter();
  const handleMovieClick = (id) => {
    router.push(`/detail/${id}`);
  };

  // Сонгосон жанруудын нэрийг олох
  const selectedGenreNames = genre
    .filter((g) => selectedGenreIds.includes(g.id))
    .map((g) => g.name)
    .join(", ");

  return (
    <div>
      <Header />
      <div className="w-[1280px] h-[1257px] mt-12 mx-20">
        <div className="w-[1280px] h-[36px] font-semibold text-3xl ">
          Search filter
        </div>
        <div className="w-[1280px] h-[1189px] mt-8 flex gap-10 ">
          <div className=" w-[387px] h-[352px]">
            <div className="py-10 ">
              <p className="font-semibold text-2xl">Genres</p>
              <p className="font-normal text-base">
                See lists of movies by genre{" "}
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

          <div className="bg-white w-[806px] h-[1189px] ">
            {/* Киноны жагсаалтын дээр гарах жанрын нэр болон тоо */}
            <div className="my-6 px-4 flex justify-between items-center border-b pb-4">
              <h2 className="text-xl font-bold">
                {selectedGenreIds.length > 0
                  ? `${selectedGenreNames} titles`
                  : "All Movies"}
              </h2>
              <span className="text-gray-500 font-medium">
                {totalResults.toLocaleString()} titles
              </span>
            </div>

            <div className="flex flex-wrap gap-4 rounded-lg justify-center">
              {genreMovie?.slice(0, 6).map((movie) => (
                <div
                  onClick={() => handleMovieClick(movie.id)}
                  key={movie.id}
                  className="w-[229px] h-[439px] rounded-lg flex flex-col cursor-pointer"
                >
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-500 w-[229px] h-[85px] gap-4 flex p-4 rounded-lg">
                    <div className="flex items-center">
                      <span>
                        <Star />
                      </span>
                      <div className="flex justify-center items-center">
                        <p className="font-normal text-base">
                          {Math.floor(movie?.vote_average) || "6.9"}
                        </p>
                        <span className="font-normal text-base text-gray-400">
                          /10
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="font-normal text-sm">
                        {movie.title || "Gladiator II"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1280px] h-[40px] flex justify-end">
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