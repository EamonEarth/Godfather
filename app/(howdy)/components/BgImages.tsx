import Image from "next/image";

const BgImages = () => {
  return (
    <div className="z-[-10]">
      <div className="absolute pointer-events-none lg:top-2/3 lg:left-16 rounded-2xl opacity-40">
        {/* <ArrowBigDownDash className="text-white w-96 h-96 opacity-20" /> */}
        <Image
          src="/leo.png"
          alt="leo"
          height={200}
          width={200}
          className="rounded-2xl"
        />
      </div>
      <div className="absolute right-0 md:right-[50%] lg:top-[95%] lg:right-1/3 rounded-2xl opacity-40">
        {/* <ArrowBigDownDash className="text-white w-96 h-96 opacity-20" /> */}
        <Image
          src="/left.png"
          alt="leo"
          height={200}
          width={200}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default BgImages;
