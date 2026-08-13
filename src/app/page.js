"use client";
import Image from "next/image";
import { Header } from "./Features/Header";
import { Hero } from "./Features/Hero";
import { Footer } from "./Features/Footer";
import { useEffect, useState } from "react";
import { Upcoming } from "./Features/Upcoming";
import { Popular } from "./Features/Popular";
import { TopRated } from "./Features/TopRated";

// const api_token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export default function Home() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [dark, setDark] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://api.themoviedb.org/3//movie/popular?language=en-US&page=1",
  //     { headers: { Authorization: `Bearer ${api_token}` } },
  //   );

  //   const jsonData = await response.json();
  //   return jsonData.results;
  // };
  // useEffect(() => {
  //   getData()
  //     .then((data) => setData(data))
  //     .catch(() => setErrorMessage("MOVIE API ERROR"))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  // console.log(data, "this is my data");
  return (
    <div className="w-screen h-screen  dark:bg-black">
     
        <div>
          <Header />
          <Hero />
          <Upcoming />
          <Popular />
          <TopRated />
          <Footer />
        </div>
    </div>
  );
}
