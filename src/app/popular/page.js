"use client";
import { Header } from "../Features/Header";
import { Popular } from "../Features/Popular";
import { Footer } from "../Features/Footer";
import { ChevronLeft } from "../Icons/ChevronLeft";
import { ChevronRight } from "../Icons/ChevronRight";

export default function PopularPage() {
  return (
    <div>
      <Header />
      <Popular />
       <div className="w-[1280px] h-[40px]  flex justify-end ">
        <div className="w-[294px] h-[40px] flex gap-2 ">
          <button className="w-[114px] h-[40px] font-medium text-sm text-gray-400 flex items-center gap-2 ">
            <ChevronLeft />
            Previous
          </button>
          <button className="w-[40px] h-[40px] rounded-md  bg-amber-400 font-medium text-sm ">
            {" "}
            1{" "}
          </button>
          <button className="w-[40px] h-[40px] rounded-md  bg-amber-400 font-medium text-sm ">
            {" "}
            2{" "}
          </button>
          <button className="w-[40px] h-[40px] rounded-md  bg-amber-400 font-medium text-sm ">
            {" "}
            ...{" "}
          </button>
          <button className="w-[40px] h-[40px] rounded-md  bg-amber-400 font-medium text-sm ">
            {" "}
            5{" "}
          </button>
          <button className="font-medium text-sm text-gray-400 flex items-center gap-2">
            <ChevronRight />
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
