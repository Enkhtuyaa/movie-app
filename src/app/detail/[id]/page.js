"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { First1 } from "@/app/Icons/First1";
import { useRouter } from "next/navigation";
import { Header } from "@/app/Features/Header";
import { Footer } from "@/app/Features/Footer";
import { Star } from "@/app/Icons/Star";
import { MoviePoster } from "@/app/Icons/MoviePoster";
import { WickedLogo } from "@/app/Icons/WickedLogo";
import { ArrowRight } from "@/app/Icons/ArrowRight";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export default function Detail() {
  const [movie, Setmovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();

  // console.log("this is the param", params);

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/${movieId}?language=en-US",
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
console.log(response)
    // const jsonData = await response.json();
    // return jsonData.results;
  };
  // useEffect(() => {
  //   getData()
  //     .then((data) => setData(data))
  //     .catch(() => setErrorMessage("MOVIE API ERROR"))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  // const router = useRouter();
  // const navigateToUpcomingPage = () => {
  //   router.push("/");
  // };
  return (
    <div>
      <Header />
      <div className="flex  flex-col items-center">
        {/* {loading && <div>Loading...</div>}
        {!loading && errorMessage && <div>{errorMessage}</div>}
        {!loading && errorMessage && data.map((movie))} */}
        <div className="w-[1080px] h-[72px] flex justify-between">
          <div>
            <p className="font-bold text-4xl">Wicked</p>
            <p className=" font-normal text-lg ">2024.11.26 PG 2h40min</p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-xs ">Rating</p>
            <div className="flex ">
              <span>
                {" "}
                <Star />
              </span>
              <div className="flex flex-col">
                <div className="flex  ">
                  <p className=" font-normal text-base ">6.9</p>
                  <span className=" font-normal text-base text-gray-400">
                    /10
                  </span>
                </div>
                <div className="font-normal text-xs text-gray-400">37k</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1080px] h-[428px] flex gap-8">
          <div className="w-[290px] h-[428px]">
            <MoviePoster />
          </div>
          <div className="w-[760px] h-[428px]">
            <WickedLogo />
          </div>
        </div>
        <div className="w-[1080px] h-[271px] pt-8  pb-8 flex  flex-col gap-5">
          <div className="flex gap-3">
            <span className="w-[77px] h-[20px] rounded-full font-semibold text-xs">
              Fairy Tale
            </span>
            <span className="w-[91px] h-[20px] rounded-full font-semibold text-xs">
              Pop Musical
            </span>
            <span className="w-[67px] h-[20px] rounded-full font-semibold text-xs">
              Fantasy
            </span>
            <span className="w-[65px] h-[20px] rounded-full font-semibold text-xs">
              Musical
            </span>
            <span className="w-[75px] h-[20px] rounded-full font-semibold text-xs">
              Romance
            </span>
          </div>
          <span className=" font-normal text-base w-[1080px] h-[48px]">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </span>
          <div className=" flex  w-[1080px] h-[41px] gap-13">
            <p className="font-bold text-base">Director</p>
            <p className="font-normal text-base">Jon M. Chu</p>
          </div>
          <div className="flex  w-[1080px] h-[41px] gap-13">
            <p className="font-bold text-base">Writers</p>
            <p className="font-normal text-base">
              Winnie Holzman · Dana Fox · Gregory Maguire
            </p>
          </div>
          <div className="flex  w-[1080px] h-[41px] gap-13">
            <p className="font-bold text-base">Stars</p>
            <p className="font-normal text-base">
              Cynthia Erivo · Ariana Grande · Jeff Goldblum
            </p>
          </div>
        </div>
        <div className="w-[1080px] h-[36px] flex justify-between ">
          <div className="text-2xl font-semibold">More like this</div>

          <div className="relative flex items-center ">
            <input
              placeholder="See more"
              className=" w-[100px] h-[28px]font-medium text-sm pr-6 bg-transparent focus:outline-none"
              style={{ cursor: "pointer" }}
            />
            <span className="absolute right-2.5">
              <ArrowRight />
            </span>
          </div>
        </div>
        <div className="w-[1080px] h-[372px] flex gap-8 rounded-lg">
          <div className="w-[190px] h-[372px] rounded-lg ">
            <div>
              <First1 />
            </div>
            <div>
              <div className="flex items-center">
                <span>
                  <Star />
                </span>
                <div className="flex  ">
                  <p className=" font-normal text-base ">6.9</p>
                  <span className=" font-normal text-base text-gray-400">
                    /10
                  </span>
                </div>
              </div>
              <p className="font-normal text-lg">Gladiator II </p>
            </div>
          </div>
          <div className="w-[190px] h-[372px]">
            <div></div>
            <div>
              <div className="flex items-center">
                <span>
                  <Star />
                </span>
                <div className="flex  ">
                  <p className=" font-normal text-base ">6.9</p>
                  <span className=" font-normal text-base text-gray-400">
                    /10
                  </span>
                </div>
              </div>
              <p className="font-normal text-lg">Gladiator II </p>
            </div>
          </div>
          <div className="w-[190px] h-[372px]">
            <div></div>
            <div>
              <div className="flex items-center">
                <span>
                  <Star />
                </span>
                <div className="flex  ">
                  <p className=" font-normal text-base ">6.9</p>
                  <span className=" font-normal text-base text-gray-400">
                    /10
                  </span>
                </div>
              </div>
              <p className="font-normal text-lg">Gladiator II </p>
            </div>
          </div>
          <div className="w-[190px] h-[372px]">
            <div></div>
            <div>
              <div className="flex items-center">
                <span>
                  <Star />
                </span>
                <div className="flex  ">
                  <p className=" font-normal text-base ">6.9</p>
                  <span className=" font-normal text-base text-gray-400">
                    /10
                  </span>
                </div>
              </div>
              <p className="font-normal text-lg">Gladiator II </p>
            </div>
          </div>
          <div className="w-[190px] h-[372px]">
            <div></div>
            <div>
              <div className="flex items-center">
                <span>
                  <Star />
                </span>
                <div className="flex  ">
                  <p className=" font-normal text-base ">6.9</p>
                  <span className=" font-normal text-base text-gray-400">
                    /10
                  </span>
                </div>
              </div>
              <p className="font-normal text-lg">Gladiator II </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
