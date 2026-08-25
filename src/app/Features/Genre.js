import { useState } from "react";

const GENRES = [
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Science-Fiction",
  "Documentary",
  "Animation",
  "Crime",
  "Family",
  "Music",
  "Fantasy",
  "Romance",
  "Adventure",
  "History",
  "Mystery",
  "TV Movie",
  "Thriller",
  "War",
  "Western"
];

export default function GenreSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Genre");

  return (
    <div className="relative w-[150px]">
      <input
        list="genre-options"
        placeholder="Genre"
        className="w-[120px] h-9 rounded-md text-black bg-white pl-8 pr-3 text-sm border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-10 px-3 bg-white border border-gray-200 rounded-md text-sm text-black flex items-center justify-between shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>{selected}</span>
        <span className="text-xs text-gray-400">▼</span>
      </button>

      {/* Нээгдэх жагсаалт - Энд өндөр, өргөнийг өөрийнхөөрөө заана */}
      {isOpen && (
        <ul className="absolute left-0 top-11 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
          {GENRES.map((genre) => (
            <li
              key={genre}
              onClick={() => {
                setSelected(genre);
                setIsOpen(false);
              }}
              /* Энд h-10 (өндөр), px-3 (өргөний зай) гэх мэт CSS өгнө */
              className="h-10 px-3 flex items-center text-sm hover:bg-blue-50 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
            >
              {genre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
