import Image from "next/image";
import { Header } from "./Features/Header";
import { Hero } from "./Features/Hero";
import { Footer } from "./Features/Footer";
import { ArrowRight } from "./Icons/ArrowRight";
import { Star } from "./Icons/Star";
export default function Home() {
  return (
    <div className="w-screen h-screen  dark:bg-black">
      <Header />
      <Hero />
      <div className="  w-[1440px] h-[3038px] flex p-12  flex-col ">
        <div className="w-[1277px] h-[36px] flex items-center  p-12 ">
          <div className="flex justify-between items-center w-full">
            <span className=" font-semibold text-2xl">Upcoming</span>
            <div className="relative flex items-center px-4">
              <input
                placeholder="See more"
                className=" w-[100px] h-[28px]font-medium text-sm pr-6 bg-transparent focus:outline-none"
              />
              <span className="absolute right-2.5">
                <ArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className=" w-[1277px] h-[910px] flex   flex items-center flex-wrap gap-8 ">
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
        </div>
    <div className="w-[1277px] h-[36px] flex items-center p-12 ">
          <div className="flex justify-between items-center w-full">
            <span className=" font-semibold text-2xl">Popular</span>
            <div className="relative flex items-center px-4">
              <input
                placeholder="See more"
                className=" w-[100px] h-[28px]font-medium text-sm pr-6 bg-transparent focus:outline-none"
              />
              <span className="absolute right-2.5">
                <ArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className=" w-[1277px] h-[910px] flex   flex items-center flex-wrap gap-8 ">
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
        </div>
    <div className="w-[1277px] h-[36px] flex items-center   p-12 ">
          <div className="flex justify-between items-center w-full">
            <span className=" font-semibold text-2xl">Top Rated</span>
            <div className="relative flex items-center px-4">
              <input
                placeholder="See more"
                className=" w-[100px] h-[28px]font-medium text-sm pr-6 bg-transparent focus:outline-none"
              />
              <span className="absolute right-2.5">
                <ArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className=" w-[1277px] h-[910px] flex flex items-center flex-wrap gap-8 ">
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="svg.jpg" className="w-[229px] h-[340px]" />
            <div className="w-[229px] h-[95px] bg-gray-200 flex flex-col">
              <span className="flex items-center gap-1 ">
                <Star />
                <p className="font-medium text-sm">6.9/10</p>
              </span>
              <span className="text-lg font-normal">Dear Santa</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
