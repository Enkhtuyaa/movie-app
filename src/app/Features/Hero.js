import { Picture } from "../Icons/Picture";
import { Star } from "../Icons/Star";
export const Hero = () => {
  return (
    <div>
      <div className=" w-360 h-150 relative flex items-center justify-center">
        <Picture className="absolute inset-0 w-full h-full object-cover" />
        <div className=" w-101 h-66 relative z-10 text-white font-bold">
          <p className="text-base font-semibold">Now playing:</p>
          <p className="font-bold text-4xl">Wicked</p>
          <div className="flex">
            <Star/> <span className="text-base text-lg">6.9/10</span>
          </div>
          <span className="text-xs text-xs">
            Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. 
          </span>
        </div>
      </div>
    </div>
  );
};
