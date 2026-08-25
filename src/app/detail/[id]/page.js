"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/app/Features/Header";
import { Footer } from "@/app/Features/Footer";
import { Star } from "@/app/Icons/Star";
import { ArrowRight } from "@/app/Icons/ArrowRight";
import { Vector } from "@/app/Icons/Vector";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export default function Detail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const [credit, setCredit] = useState(null);
  const [similarMovie, setSimilarMovie] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
      { headers: { Authorization: `Bearer ${api_token}` } }
    );
    return await response.json();
  };

  const getCredit = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`,
      { headers: { Authorization: `Bearer ${api_token}` } }
    );
    return await response.json();
  };

  const getSimilar = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1`,
      { headers: { Authorization: `Bearer ${api_token}` } }
    );
    const jsonData = await response.json();
    return jsonData.results;
  };

  const handleWatchTrailer = async (movieId) => {
    if (!movieId) return;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        { headers: { Authorization: `Bearer ${api_token}` } }
      );
      const data = await response.json();
      const trailer = data.results?.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      if (trailer) {
        setTrailerKey(trailer.key);
        setIsModalOpen(true);
      } else {
        alert("Трейлер олдсонгүй");
      }
    } catch (error) {
      console.log("Trailer fetch error:", error);
    }
  };

  useEffect(() => {
    if (!params.id) return;

    Promise.all([getData(), getCredit(), getSimilar()])
      .then(([movieData, creditData, similarData]) => {
        setMovie(movieData);
        setCredit(creditData);
        setSimilarMovie(similarData || []);
      })
      .catch(() => setErrorMessage("MOVIE API ERROR"))
      .finally(() => setLoading(false));
  }, [params.id]);

  const navigateToMovieDetailPage = () => {
    router.push(`/detail/${params.id}/moviedetail`);
  };

  if (loading) return <div className="text-center py-20">Ачаалж байна...</div>;
  if (errorMessage) return <div className="text-center py-20 text-red-500">{errorMessage}</div>;

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-[1080px] h-[72px] flex justify-between">
          <div>
            <p className="font-bold text-4xl">{movie?.title}</p>
            <p className="font-normal text-lg">
              {movie?.release_date} · {movie?.runtime} min
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p className="font-medium text-xs">Rating</p>
            <div className="flex items-center gap-1">
              <Star />
              <div className="flex flex-col">
                <div className="flex">
                  <p className="font-normal text-base">
                    {movie?.vote_average ? Math.floor(movie.vote_average) : 0}
                  </p>
                  <span className="font-normal text-base text-gray-400">/10</span>
                </div>
                <div className="font-normal text-xs text-gray-400">
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1080px] h-[428px] flex gap-8">
          <div className="w-[290px] h-[428px] rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              className="object-cover rounded-lg w-full h-full"
              alt={movie?.title}
            />
          </div>
          <div className="w-[760px] h-[428px] object-cover relative flex justify-between gap-2">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              className="rounded-lg w-full h-full object-cover"
              alt={movie?.title}
            />
            <div className="flex absolute bottom-10 w-[650px] justify-between left-10">
              <button
                onClick={() => handleWatchTrailer(movie?.id)}
                className="flex gap-3 items-center cursor-pointer bg-black/40 px-4 py-2 rounded-full"
              >
                <span className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full">
                  <Vector />
                </span>
                <p className="font-normal text-lg text-white">Play trailer</p>
              </button>
              <button
                onClick={() => handleWatchTrailer(movie?.id)}
                className="flex gap-3 items-center cursor-pointer bg-black/40 px-4 py-2 rounded-full text-white"
              >
                <span className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full">
                  <Vector />
                </span>
               <p className="font-normal text-lg text-white">   Watch Now  </p>
              </button>
            </div>

            {isModalOpen && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3 right-3 text-white bg-gray-800/80 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center z-10 cursor-pointer"
                  >
                    ✕
                  </button>
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
        </div>

        <div className="w-[1080px] pt-8 pb-8 flex flex-col gap-5">
          <div className="flex gap-3 flex-wrap">
            {movie?.genres?.map((genre) => (
              <span
                key={genre?.id}
                className="px-3 py-1 bg-gray-200 rounded-full font-semibold text-xs"
              >
                {genre?.name}
              </span>
            ))}
          </div>
          <span className="font-normal text-base w-[1080px]">
            <p className="font-normal text-sm">{movie?.overview}</p>
          </span>

          <div className="flex w-[1080px] gap-13">
            <p className="font-bold text-base w-24">Director</p>
            <p className="font-normal text-sm">
              {credit?.crew
                ?.filter((item) => item.job === "Director")
                .map((item) => item.name)
                .join(" · ")}
            </p>
          </div>
          <div className="flex w-[1080px] gap-13">
            <p className="font-bold text-base w-24">Writers</p>
            <p className="font-normal text-base">
              {credit?.crew
                ?.filter((item) => item.department === "Writing")
                .slice(0, 3)
                .map((item) => item.name)
                .join(" · ")}
            </p>
          </div>
          <div className="flex w-[1080px] gap-13">
            <p className="font-bold text-base w-24">Stars</p>
            <p className="font-normal text-base">
              {credit?.cast
                ?.slice(0, 3)
                .map((item) => item.name)
                .join(" · ")}
            </p>
          </div>
        </div>

        <div className="w-[1080px] h-[36px] flex justify-between items-center mb-4">
          <div className="text-2xl font-semibold">More like this</div>
          <button
            className="flex items-center gap-1 font-medium text-sm bg-transparent focus:outline-none cursor-pointer"
            onClick={navigateToMovieDetailPage}
          >
            See more <ArrowRight />
          </button>
        </div>

        <div className="w-[1080px] flex gap-8 rounded-lg mb-12">
          {similarMovie?.slice(0, 5).map((m) => (
            <div key={m.id} className="w-[190px] rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                alt={m.title}
                className="w-full h-[270px] object-cover rounded-lg"
              />
              <div className="mt-2">
                <div className="flex items-center gap-1">
                  <Star />
                  <p className="font-normal text-base">
                    {Math.floor(m?.vote_average)}
                    <span className="text-gray-400">/10</span>
                  </p>
                </div>
                <p className="font-normal text-base truncate">{m.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}












// "use client";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { First1 } from "@/app/Icons/First1";
// import { useRouter } from "next/navigation";
// import { Header } from "@/app/Features/Header";
// import { Footer } from "@/app/Features/Footer";
// import { Star } from "@/app/Icons/Star";
// import { MoviePoster } from "@/app/Icons/MoviePoster";
// import { WickedLogo } from "@/app/Icons/WickedLogo";
// import { ArrowRight } from "@/app/Icons/ArrowRight";
// import { Vector } from "@/app/Icons/Vector";

// const api_token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

// export default function Detail() {
//   const [movie, Setmovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");
//   const params = useParams();
//   const [genre, setGenre] = useState("");
//   const [credit, setCredit] = useState("");
//   const [similarMovie, setSimilarMovie] = useState([]);
//   // const [video, setVideo] = useState(false);
//   const [trailerKey, setTrailerKey] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   // console.log("this is the param", params);

//   const getData = async () => {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
//       { headers: { Authorization: `Bearer ${api_token}` } },
//     );
//     const jsonData = await response.json();

//     return jsonData;
//   };

//   const getGenres = async () => {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${params.id}?&page=${page}}`,
//       { headers: { Authorization: `Bearer ${api_token}` } },
//     );
//     const jsonData = await response.json();
//     //  console.log(jsonData, "jsonData")
//     return jsonData;
//   };
//   // console.log(getGenres, "jsonData")

//   const getCredit = async () => {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`,
//       { headers: { Authorization: `Bearer ${api_token}` } },
//     );
//     const jsonData = await response.json();

//     return jsonData;
//   };
//   const getSimilar = async () => {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1`,
//       { headers: { Authorization: `Bearer ${api_token}` } },
//     );
//     const jsonData = await response.json();

//     return jsonData.results;
//   };

//   // const getVideo = async () => {
//   //   const response = await fetch(
//   //     ` https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,
//   //     { headers: { Authorization: `Bearer ${api_token}` } },
//   //   );
//   //   const jsonData = await response.json();
//   //   //  console.log(jsonData, "video");
//   //   return jsonData.results;
//   // };

//   const handleWatchTrailer = async (movieId) => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
//         { headers: { Authorization: `Bearer ${api_token}` } },
//       );
//       const data = await response.json();
//       const trailer = data.results?.find(
//         (vid) => vid.type === "Trailer" && vid.site === "YouTube",
//       );
//       if (trailer) {
//         setTrailerKey(trailer.key);
//         setIsModalOpen(true);
//       } else {
//         alert("Трейлер олдсонгүй");
//       }
//     } catch (error) {
//       console.log("Trailer fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     getData()
//       .then((movie) => setPlayingMovie(movie))
//       .catch(() => setErrorMessage("MOVIE API ERROR"))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   // useEffect(() => {
//   //   getVideo()
//   //     .then((data) => setVideo(data))
//   //     .catch(() => setErrorMessage("MOVIE API ERROR"))
//   //     .finally(() => {
//   //       setLoading(false);
//   //     });
//   // }, []);
//   // console.log(video, "video")
//   useEffect(() => {
//     getData()
//       .then((movie) => Setmovie(movie))
//       .catch(() => setErrorMessage("MOVIE API ERROR"))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     getGenres()
//       .then((genre) => setGenre(genre))
//       .catch(() => setErrorMessage("MOVIE API ERROR"))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     getCredit()
//       .then((credit) => setCredit(credit))
//       .catch(() => setErrorMessage("MOVIE API ERROR"))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     getSimilar()
//       .then((data) => setSimilarMovie(data || []))
//       .catch(() => setErrorMessage("MOVIE API ERROR"))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
//   // console.log(similarMovie, "similarMovie");
//   // console.log(credit, "credit");
//   // console.log(genre, "genre");
//   const router = useRouter();
//   const navigateToMovieDetailPage = () => {
//     router.push(`/detail/${params.id}/moviedetail`);
//   };
//   return (
//     <div>
//       <Header />
//       <div className="flex  flex-col items-center">
//         {/* {loading && <div>Loading...</div>}
//         {!loading && errorMessage && <div>{errorMessage}</div>}
//         {!loading && errorMessage && data.map((movie))} */}
//         <div className="w-[1080px] h-[72px] flex justify-between">
//           <div>
//             <p className="font-bold text-4xl">{movie?.title || "Wicked"}</p>
//             <p className=" font-normal text-lg ">
//               {movie?.release_date || "2024.11.26"}
//               {movie?.runtime || "2h40"}min
//             </p>
//           </div>
//           <div className="flex flex-col text-center">
//             <p className="font-medium text-xs  ">Rating</p>
//             <div className="flex ">
//               <span>
//                 {" "}
//                 <Star />
//               </span>
//               <div className="flex flex-col">
//                 <div className="flex  ">
//                   <p className=" font-normal text-base ">
//                     {Math.floor(movie?.vote_average) || "6.9"}
//                   </p>
//                   <span className=" font-normal text-base text-gray-400">
//                     /10
//                   </span>
//                 </div>
//                 <div className="font-normal text-xs text-gray-400">
//                   {Math.floor(movie?.popularity) || "37k"}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-[1080px] h-[428px] flex gap-8">
//           <div className="w-[290px] h-[428px] rounded-lg">
//             {" "}
//             <img
//               src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div className="w-[760px] h-[428px] object-cover relative flex justify-between gap-2">
//             <img
//               src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
//               className="  rounded-lg"
//             />
//             <div className=" flex absolute bottom-10  w-[650px] justify-between left-15 ">
//               <button
//                 onClick={() => handleWatchTrailer(movie?.id)}
//                 className=" flex gap-3 items-center cursor-pointer"
//               >
//                 <span className="left-2.5 flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full  ">
//                   <Vector />
//                 </span>
//                 Play trailer
//               </button>
//               <button className="flex  gap-3 items-center cursor-pointer ">
//                 <span className="left-2.5 flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full  ">
//                   <Vector />
//                 </span>
//                 ¸Watch Now
//               </button>
//             </div>
//             {isModalOpen && (
//               <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
//                 <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
//                   {/* Хаах товчлуур */}
//                   <button
//                     onClick={() => setIsModalOpen(false)}
//                     className="absolute top-3 right-3 text-white bg-gray-800/80 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center z-10 cursor-pointer"
//                   >
//                     ✕
//                   </button>

//                   {/* YouTube видео тоглуулагч */}
//                   <iframe
//                     className="w-full h-full"
//                     src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
//                     title="YouTube movie trailer"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="w-[1080px] h-[271px] pt-8  pb-8 flex  flex-col gap-5">
//           <div className="flex gap-3">
//             {movie?.genre?.map((genre) => {
//               return (
//                 <div key={genre?.id} className="font-medium  text-lg">
//                   <span className="w-[77px] h-[20px] rounded-full font-semibold text-xs">
//                     {/* Fairy Tale {movie?.genres} */}
//                     {genre?.name}
//                   </span>
//                   <span className="w-[91px] h-[20px] rounded-full font-semibold text-xs">
//                     {/* Pop Musical */}
//                   </span>
//                   <span className="w-[67px] h-[20px] rounded-full font-semibold text-xs">
//                     {/* Fantasy */}
//                   </span>
//                   <span className="w-[65px] h-[20px] rounded-full font-semibold text-xs">
//                     {/* Musical */}
//                   </span>
//                   <span className="w-[75px] h-[20px] rounded-full font-semibold text-xs">
//                     {/* Romance */}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//           <span className=" font-normal text-base w-[1080px] h-[48px]">
//             {/* Elphaba, a misunderstood young woman because of her green skin, and
//             Glinda, a popular girl, become friends at Shiz University in the
//             Land of Oz. After an encounter with the Wonderful Wizard of Oz,
//             their friendship reaches a crossroads. */}
//             <p className="font-normal text-sm"> {movie?.overview}</p>
//           </span>

//           <div className=" flex  w-[1080px] h-[41px] gap-13">
//             <p className="font-bold text-base">Director</p>
//             <p className="font-normal text-sm">
//               {credit.crew
//                 ?.filter((item) => item.department === "Directing")
//                 .map((item) => item.name)}
//             </p>
//           </div>
//           <div className="flex  w-[1080px] h-[41px] gap-13">
//             <p className="font-bold text-base">Writers</p>
//             {/* <p className="font-normal text-base">
//               Winnie Holzman · Dana Fox · Gregory Maguire
//             </p> */}
//             <p className="font-normal text-base">
//               {" "}
//               {credit.crew
//                 ?.filter((item) => item.known_for_department === "Writing")
//                 .map((item) => item.name)}
//             </p>
//           </div>
//           <div className="flex  w-[1080px] h-[41px] gap-13">
//             <p className="font-bold text-base">Stars</p>
//             {/* <p className="font-normal text-base">
//               Cynthia Erivo · Ariana Grande · Jeff Goldblum
//             </p> */}
//             <p className="font-normal text-base">
//               {credit.cast
//                 ?.slice(0, 3)
//                 .filter((item) => item.known_for_department === "Acting")
//                 .map((item) => item.name)}
//             </p>
//           </div>
//         </div>
//         <div className="w-[1080px] h-[36px] flex justify-between ">
//           <div className="text-2xl font-semibold">More like this</div>

//           <div className="relative flex items-center ">
//             <button
//               className=" w-[100px] h-[28px]font-medium text-sm pr-6 bg-transparent focus:outline-none"
//               style={{ cursor: "pointer" }}
//               onClick={navigateToMovieDetailPage}
//             >
//               See more
//             </button>
//             <span className="absolute right-2.5">
//               <ArrowRight />
//             </span>
//           </div>
//         </div>
//         <div className="w-[1080px] h-[372px] flex gap-8 rounded-lg">
//           {similarMovie?.slice(0, 5).map((movie) => (
//             <div key={movie.id} className="w-[190px] h-[372px] rounded-lg ">
//               <div>
//                 <img
//                   src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
//                   alt={movie.title}
//                   className="w-full h-full object-cover rounded-lg"
//                 />

//                 {/* <First1 /> */}
//                 {/* { <MoviePoster />} */}
//               </div>
//               <div>
//                 <div className="flex items-center">
//                   <span>
//                     <Star />
//                   </span>
//                   <div className="flex  ">
//                     <p className=" font-normal text-base ">
//                       {Math.floor(movie?.vote_average) || "6.9"}
//                     </p>
//                     <span className=" font-normal text-base text-gray-400">
//                       /10
//                     </span>
//                   </div>
//                 </div>
//                 <p className="font-normal text-lg">
//                   {movie.title || "Gladiator II"}
//                 </p>
//               </div>
//             </div>
//           ))}
//            
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
