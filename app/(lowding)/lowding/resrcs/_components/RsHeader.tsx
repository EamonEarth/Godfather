import Image from "next/image";

interface RsHeaderProps {
  darkTheme: boolean;
}
const RsHeader = ({ darkTheme }: RsHeaderProps) => {
  const headerSrc = darkTheme
    ? "/lowding/resource-text-dark.svg"
    : "/lowding/resource-text-light.svg";
  return (
    <section className="pt-[80px] flex items-center justify-center">
      <div
        className="absolute w-full h-[364px] bg-cover bg-center z-0 opacity-50 "
        style={{ backgroundImage: "url('/lowding/resources-header.png')" }}
      ></div>
      <div className=" absolute w-full h-[364px] bg-on-foreground dark:bg-black bg-cover bg-center z-0  opacity-70  "></div>

      <Image
        src={headerSrc}
        alt="resources banner"
        height={50}
        width={503}
        className="max-w-[66%] py-4 h-[364px] z-10"
      />
    </section>
  );
};

export default RsHeader;
