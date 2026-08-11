import { Picture } from "../Icons/Picture";
import { Star } from "../Icons/Star";
import { Vector } from "../Icons/Vector";
import { ArrowRight } from "../Icons/ArrowRight";
export const Hero = () => {
  return (
    <div className="pt-6 ">
      <div className=" w-360 h-150 relative flex items-center p-36 ">
        <Picture className="absolute inset-0 w-full h-full object-cover " />
        <div className=" w-101 h-66 relative z-10 text-white font-bold ">
          <p className="text-base font-semibold">Now playing:</p>
          <p className="font-bold text-4xl">Wicked</p>
          <div className="flex  items-center">
            <Star /> <span className="text-base text-lg">6.9/10</span>
          </div>
          <span className="flex text-xs py-4 ">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
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
          {/* <button className="w-[145px] h-[40px] bg-white rounded-md flex items-center justify-center gap-4 font-medium text-sm text-black">
            <Vector />
            <span>Watch Trailer</span>
          </button> */}
        </div>
      </div>
     <div className="flex justify-center p-12">
       <div className="w-[1277px] h-[36px] flex items-center px-4  ">
        <div className="flex justify-between items-center w-full">
          <span className=" font-semibold text-2xl">Upcoming</span>
          <div className="relative flex items-center px-4">
            <input placeholder="See more" className=" w-[100px] h-[28px]font-medium text-sm pr-6 bg-transparent focus:outline-none" />
         <span className="absolute right-2.5">
          <ArrowRight/>
         </span>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};
