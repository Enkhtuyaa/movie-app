 
 import React from 'react';

 export function PopularSkeleton() {
  return (
    <div className="flex flex-col p-12 ">
      <div className="w-[1277px] h-[36px] flex items-center p-12 ">
        <div className="flex justify-between items-center w-full animate-pulse">
          <div className="h-7 w-32 bg-gray-300 rounded"></div>
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="w-[1277px] min-h-[910px] flex items-center flex-wrap gap-8">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex flex-col animate-pulse ">
            <div className="w-[229px] h-[340px] bg-gray-300 rounded-lg mb-2"></div>
            <div className="w-[229px] h-[95px] bg-gray-300 rounded-lg p-3 flex flex-col justify-between">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
