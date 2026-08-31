// src/components/HeroSkeleton.jsx
import React from 'react';

const HeroSkeleton = () => {
  return (
    <div className="pt-6 relative w-full h-[600px] bg-gray-500 animate-pulse flex items-center p-36">
      <div className="w-101 space-y-4 relative z-10">
        {/* 'Now playing:' гэсэн текстийн байр */}
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        {/* Киноны нэрний байр */}
        <div className="h-10 bg-gray-300 rounded w-3/4"></div>
        {/* Үнэлгээний байр */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          <div className="h-5 bg-gray-300 rounded w-12"></div>
        </div>
        {/* Киноны товч агуулгын байр */}
        <div className="space-y-2 pt-2">
          <div className="h-3 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        </div>
        {/* 'Watch Trailer' товчлуурын байр */}
        <div className="h-10 bg-gray-300 rounded-lg w-[145px] mt-4"></div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
