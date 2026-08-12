import { Star } from "../Icons/Star";
import { Vector } from "../Icons/Vector";
import { ChevronRight } from "../Icons/ChevronRight";
export const Hero = () => {
  return (
    <div className="pt-6 ">
      <div className=" w-full  h-[600px] relative flex items-center p-36 ">
        <img
          src="official.jpg"
          className=" absolute inset-0 w-[1440px] h-[600px]   "
        />
        {/* <Picture className="absolute inset-0 w-full h-full object-cover " /> */}
        <div className="  w-full relative z-10 flex justify-between items-center">
          <div className=" w-101 h-66 relative z-10 text-white font-bold ">
            <p className="text-base font-semibold">Now playing:</p>
            <p className="font-bold text-4xl">Wicked</p>
            <div className="flex  items-center">
              <Star /> <span className="text-base text-lg">6.9/10</span>
            </div>
            <span className="flex text-xs py-4 ">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </span>
            <Vector />
            <div className="relative flex  items-center">
              <input
                placeholder="Watch Trailer"
                className="w-[145px] h-[40px] bg-white rounded-md font-medium text-sm text-black rounded-lg pl-8 pr-3"
              />
              <span className="absolute left-2.5">
                <Vector />
              </span>
            </div>
          </div>
          <div className="w-[40px] h-[40px] bg-white rounded-full  flex items-center justify-center ">
            <ChevronRight />
          </div>
          {/* <button className="w-[145px] h-[40px] bg-white rounded-md flex items-center justify-center gap-4 font-medium text-sm text-black">
            <Vector />
            <span>Watch Trailer</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};
