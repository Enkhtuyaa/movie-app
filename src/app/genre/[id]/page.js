"use client";
import { Header } from "@/app/Features/Header";
import { Footer } from "@/app/Features/Footer";
import { useState, useEffect } from "react";
const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export default function GenreDetailPage() {
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    console.log(jsonData, "data");
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
  return (
    <div>
      <Header />
      <div className="w-[1280px] h-[1257px] bg-amber-300 mt-12 mx-20">
        <div className="w-[1280px] h-[36px] bg-white font-semibold text-3xl ">
          Search filter
        </div>
        <div className="w-[1280px] h-[1189px] bg-green-600 mt-8 flex gap-10 ">
          <div className="bg-amber-300 w-[387px] h-[352px]">
            <p className="font-semibold text-2xl">Genres</p>
            <p className="font-normal text-base">
              See lists of movies by genre{" "}
            </p>
            <div className="flex flex-wrap gap-2">
              {genre.map((item) => (
                <button
                  key={item.id}
                  type="button"
                //   onClick={() => navigateGenreDetailPage(item)}
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
          <div className="bg-white w-[806px] h-[1189px]">title</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
