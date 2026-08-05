export default function HealthLibraryLoading() {
  return (
    <div className="min-h-screen bg-[#000000] pt-24 pb-24 px-4 md:px-12 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-16">
        <div>
          <div className="h-12 w-48 bg-[#1A1A1A] rounded-2xl mb-4"></div>
          <div className="h-6 w-72 bg-[#1A1A1A] rounded-xl"></div>
        </div>
        <div className="w-full md:w-[450px] h-14 bg-[#1A1A1A] rounded-full"></div>
      </div>

      {/* Hero Skeleton */}
      <div className="mb-20">
        <div className="h-8 w-48 bg-[#1A1A1A] rounded-xl mb-6"></div>
        <div className="w-full h-[60vh] md:h-[550px] bg-[#1A1A1A] rounded-3xl"></div>
      </div>

      {/* Carousel Skeleton */}
      <div className="mb-20">
        <div className="h-8 w-48 bg-[#1A1A1A] rounded-xl mb-6"></div>
        <div className="flex gap-6 overflow-hidden">
          <div className="w-[160px] h-16 bg-[#1A1A1A] rounded-full shrink-0"></div>
          <div className="w-[160px] h-16 bg-[#1A1A1A] rounded-full shrink-0"></div>
          <div className="w-[160px] h-16 bg-[#1A1A1A] rounded-full shrink-0"></div>
          <div className="w-[160px] h-16 bg-[#1A1A1A] rounded-full shrink-0 hidden md:block"></div>
          <div className="w-[160px] h-16 bg-[#1A1A1A] rounded-full shrink-0 hidden lg:block"></div>
        </div>
      </div>

      {/* Cards Skeleton */}
      <div className="mb-20">
        <div className="h-8 w-48 bg-[#1A1A1A] rounded-xl mb-6"></div>
        <div className="flex gap-6 overflow-hidden">
          <div className="w-[280px] md:w-[320px] aspect-[4/5] bg-[#1A1A1A] rounded-3xl shrink-0"></div>
          <div className="w-[280px] md:w-[320px] aspect-[4/5] bg-[#1A1A1A] rounded-3xl shrink-0"></div>
          <div className="w-[280px] md:w-[320px] aspect-[4/5] bg-[#1A1A1A] rounded-3xl shrink-0"></div>
          <div className="w-[280px] md:w-[320px] aspect-[4/5] bg-[#1A1A1A] rounded-3xl shrink-0 hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}
