import { Layout, Scroll, Title } from "./index";

function Intro() {
  return (
    <Layout  id={"home"} comp={"summary"}>
      <Title title={"Introduction"} />
      <h1 className="text-5xl sm:text-6xl md:text-8xl p-1 sm:p-2">
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
          Obaid Awan
        </span>
        <span className="text-md">👋</span>
      </h1>
      <p data-text="MERN Stack Developer" className="mx-auto text-md xs:text-xl sm:text-1xl p-1 sm:p-2 relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-sky-400 before:absolute before:whitespace-nowrap before:text-transparent before:animate-wave">
        MERN Stack Developer
      </p>
    </Layout>
  );
}

export default Intro;
