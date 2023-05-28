import { Scroll, Title } from "./index";

function Intro() {
  return (
    <div id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <div className="mt-auto">
        <div className="w-fit mx-auto "></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <Title title={"Introduction"} />
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl p-1 sm:p-2">
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
            Obaid Awan
          </span>
          <span className="text-md">👋</span>
        </h1>
        <p data-text="MERN Stack Developer" className="mx-auto text-sm xs:text-xl sm:text-1xl p-1 sm:p-2 relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-sky-400 before:absolute before:whitespace-nowrap before:text-transparent before:animate-wave">
          MERN Stack Developer
        </p>
      </div>
      <div className="mt-auto animate-bounce mb-8">
        <Scroll comp="summary" />
      </div>
    </div>
  );
}

export default Intro;
