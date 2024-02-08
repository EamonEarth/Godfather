const Page = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-y-16 justify-center items-center min-h-screen bg-on-foreground dark:bg-on-background dark:text-on-foreground underline-offset-2">
        <div className="flex flex-col items-center ">
          Designed by:
          <a
            href="https://camilacastillo.squarespace.com/illustration"
            className="underline hover:no-underline"
          >
            Camila Castillo
          </a>
          <span>&</span>
          <a
            href="https://github.com/EamonEarth"
            className="underline hover:no-underline"
          >
            Eamon Travers
          </a>
        </div>
        <div className="flex flex-col items-center">
          Website created by:
          <a
            href="https://github.com/EamonEarth"
            className="underline hover:no-underline"
          >
            Eamon Travers
          </a>
        </div>
        © June, 2023
      </div>
    </div>
  );
};

export default Page;
