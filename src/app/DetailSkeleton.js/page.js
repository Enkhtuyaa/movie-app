export function DetailSkeleton() {
  return (
    <div className="w-full flex flex-col items-center animate-pulse pt-6">
      {/* 1. Толгойн хэсэг (Title & Rating) */}
      <div className="w-[1080px] h-[72px] flex justify-between items-center mb-6">
        <div className="flex flex-col gap-2">
          {/* Нэрний хэсэг */}
          <div className="w-80 h-9 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          {/* Огноо болон хугацаа */}
          <div className="w-48 h-5 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
        </div>
        {/* Rating хэсэг */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-3 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
          <div className="w-20 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        </div>
      </div>

      {/* 2. Poster & Trailer Хэсэг */}
      <div className="w-[1080px] h-[428px] flex gap-8">
        {/* Poster Skeleton */}
        <div className="w-[290px] h-[428px] bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        {/* Backdrop / Main Banner Skeleton */}
        <div className="w-[760px] h-[428px] bg-gray-300 dark:bg-gray-700 rounded-lg relative">
          {/* Трейлер товчнуудын Skeleton */}
          <div className="flex absolute bottom-10 w-[650px] justify-between left-10">
            <div className="w-40 h-12 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
            <div className="w-40 h-12 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 3. Жанр болон Тайлбар, Баг хамт олон */}
      <div className="w-[1080px] pt-8 pb-8 flex flex-col gap-5">
        {/* Genres */}
        <div className="flex gap-3">
          <div className="w-16 h-6 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
          <div className="w-20 h-6 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
          <div className="w-24 h-6 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
        </div>

        {/* Overview */}
        <div className="space-y-2 w-full">
          <div className="w-full h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="w-11/12 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>

        {/* Director, Writers, Stars */}
        <div className="space-y-3 pt-2">
          <div className="flex gap-13 items-center">
            <div className="w-24 h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-48 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
          <div className="flex gap-13 items-center">
            <div className="w-24 h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-64 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
          <div className="flex gap-13 items-center">
            <div className="w-24 h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-80 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>

      {/* 4. More like this Секц */}
      <div className="w-[1080px] h-[36px] flex justify-between items-center mb-4">
        <div className="w-40 h-7 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>

      {/* Төстэй кинонуудын кардууд */}
      <div className="w-[1080px] flex gap-8 mb-12">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="w-[190px] flex flex-col gap-2">
            <div className="w-full h-[270px] bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            <div className="w-16 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="w-32 h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}