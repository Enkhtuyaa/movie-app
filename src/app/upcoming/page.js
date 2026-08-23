"use client";

import { Header } from "../Features/Header";
import { Upcoming } from "../Features/Upcoming";
import { Footer } from "../Features/Footer";
import { ChevronRight } from "../Icons/ChevronRight";
import { ChevronLeft } from "../Icons/ChevronLeft";
import { useState, useEffect } from "react";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDEwMzE0NzE4YjI2NGE3MWRiYTQ4MGQ0MWUwOGMwOCIsIm5iZiI6MTc4NjU4NTAxNy44MjgsInN1YiI6IjZhN2QxZmI5Y2Q5ZWRlYTg4ODUxNzljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ph3bZTAcyGoN3fxAVOoUG3O5Rt4W2pf9l_ieHp8nAMY";

export default function UpcomingPage() {
  const [selectedPage, setSelectedPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [dark, setDark] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${selectedPage}`,
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

  // console.log("this is my page", selectedPage)
  // console.log("this is my data", data);
  
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
  // console.log(handleSecondButton);
  return (
    <div>
      <Header />
      <Upcoming />
      <div className="w-[1280px] h-[40px]  flex justify-end ">
        <div className="w-[294px] h-[40px] flex gap-2 ">
          <button
            onClick={handlePreviousButton}
            className="w-[114px] h-[40px] font-medium text-sm text-gray-400 flex items-center gap-2 cursor-pointer "
          >
            <ChevronLeft />
            Previous
          </button>
          <button className="w-[40px] h-[40px] rounded-md  bg-amber-400 font-medium text-sm ">
            {" "}
            {selectedPage}
          </button>
          <button
            onClick={() => handleSecondButton(selectedPage + 1)}
            className="w-[40px] h-[40px] rounded-md  bg-amber-400 font-medium text-sm cursor-pointer"
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
