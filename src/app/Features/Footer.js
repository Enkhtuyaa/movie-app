import { Movie } from "../Icons/Movie";
import { Email } from "../Icons/Email";
import { Phone } from "../Icons/Phone";
export const Footer = () => {
  return (
    <div className="w-full pt-12">
      <div className="w-full  bg-blue-600 flex items-center justify-center pt-10 ">
        <div className=" w-full max-w-[1280px]   flex justify-between">
          <div className="flex flex-col gap-3 text-white">
            <div className="flex gap-2">
              <Movie />
              <p className="font-bold text-base">Movie Z</p>
            </div>

            <span className="text-sm font-normal">
              {" "}
              © 2024 Movie Z. All Right Reversed.{" "}
            </span>
          </div>
          <div className="flex gap-24">
            <div>
              <p className="text-sm font-normal text-white p-3">
                Contact information{" "}
              </p>
              <div className="flex gap-3 items-center">
                <Email />
                <div className="flex flex-col">
                  <p className="font-medium text-sm text-white">Email:</p>
                  <p className="font-medium text-sm text-white">
                    support@movieZ.com
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center p-3">
                <Phone />
                <div className="flex flex-col">
                  <p className="font-medium text-sm text-white">Phone:</p>
                  <p className="font-medium text-sm text-white">
                    +976 (11) 123-4567
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 flex  flex-col gap-3">
              <p className="font-normal text-sm text-white">Follow us</p>
              <p className="font-medium text-sm text-white">
                {" "}
                Facebook Instagram Twitter Youtube
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
