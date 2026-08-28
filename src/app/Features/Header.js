"use client";
import { Movie } from "../Icons/Movie";
import { Moon } from "../Icons/Moon";
import { Search } from "../Icons/Search";
import { useRouter } from "next/navigation";
import { Dropdown } from "../Icons/Dropdown";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export const Header = () => {
  const params = useParams();
  const router = useRouter();

  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    return jsonData.genres;
  };

  useEffect(() => {
    getData()
      .then((data) => setGenre(data || []))
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigateToHome = () => {
    router.push("/");
  };

  const navigateGenreDetailPage = (item) => {
    setSelectedGenre(item.name);
    setIsOpen(false);
    router.push(`/genre/${item.id}`);
  };

  // Хайлтын /search/[id] эсвэл /search/[value] хуудас руу шилжүүлэх
  const handleSearchSubmit = () => {
    if (!searchInputValue.trim()) return;
    const value = searchInputValue;
    setSearchInputValue("");
    setIsSearchOpen(false);
    router.push(`/search/${encodeURIComponent(value)}`);
  };

  // Enter дарах үед хуудас руу шилжих
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const getSearch = async (query) => {
    if (!query.trim()) return [];
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    return jsonData.results || [];
  };

  useEffect(() => {
    if (!searchInputValue.trim()) {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    getSearch(searchInputValue)
      .then((data) => {
        setSearchResults(data);
        setIsSearchOpen(true);
      })
      .catch(() => setErrorMessage("MOVIE API ERROR"));
  }, [searchInputValue]);

  const handleMovieClick = (moviedetail) => {
    setIsSearchOpen(false);
    setSearchInputValue("");
    router.push(`/detail/${moviedetail}`);
  };

  return (
    <div>
      <div className="w-full h-16 bg-white flex justify-center items-center border-b border-gray-100">
        <div className="w-7xl h-9 bg-white flex justify-between items-center px-4">
          <div
            className="flex gap-2 cursor-pointer items-center font-bold text-lg"
            onClick={navigateToHome}
          >
            <Movie /> Movie Z
          </div>

          <div className="flex justify-center items-center gap-3">
            {/* Genre Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-[140px] h-9 rounded-md text-black bg-white px-3 text-sm border border-gray-200 shadow-sm focus:outline-none flex items-center justify-between gap-1 cursor-pointer"
              >
                <span className="truncate">{selectedGenre || "Genre"}</span>
                <Dropdown />
              </button>
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-[577px] bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-5">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Genres</h3>
                    <p className="text-sm text-gray-500">
                      See lists of movies by genre
                    </p>
                  </div>
                  <hr className="mb-4 border-gray-200" />
                  {loading && (
                    <div className="py-2 text-sm text-gray-400">Loading...</div>
                  )}
                  {errorMessage && (
                    <div className="py-2 text-sm text-red-500">
                      {errorMessage}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {genre.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => navigateGenreDetailPage(item)}
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full text-xs font-semibold text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <span>{item.name}</span>
                        <svg
                          className="w-3 h-3 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search Input and Search Results */}
            <div className="relative flex items-center">
              <input
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
                className="w-[379px] h-[36px] rounded-lg pl-10 pr-3 border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span 
                className="absolute left-2.5 text-gray-400 cursor-pointer"
                onClick={handleSearchSubmit}
              >
                <Search />
              </span>

              {/* Search Dropdown Results */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-[379px] max-h-[400px] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-xl z-50 divide-y divide-gray-100">
                  {searchResults.slice(0, 6).map((movie) => (
                    <div
                      key={movie.id}
                      onClick={() => handleMovieClick(movie.id)}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                            : "https://via.placeholder.com/48x72?text=No+Image"
                        }
                        alt={movie.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-semibold text-gray-800 truncate">
                          {movie.title}
                        </span>
                        <span className="text-xs text-gray-500">
                          {movie.release_date?.split("-")[0] || "N/A"} • ★{" "}
                          {movie.vote_average?.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <span className="w-9 h-9 rounded-md flex justify-center items-center shadow-sm border border-gray-200 cursor-pointer">
            <Moon />
          </span>
        </div>
      </div>
    </div>
  );
};