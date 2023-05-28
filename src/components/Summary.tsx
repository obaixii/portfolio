import Link from "next/link";
import { Title, Scroll } from "./index";
import Image from "next/image";

const Summary = () => {
    return (
        <div id="summary" className="h-screen flex flex-col justify-center items-center text-center">
            <div className="mt-auto">
                <div className="w-fit mx-auto"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <Title title="About Me🤷‍♂️" />
                <div className="flex justify-between gap-4 flex-wrap p-2">
                    <div className="text-center sm:text-left order-2 flex flex-col xs:flex-1 w-full gap-2 justify-center align-center p-2 text-lg sm:order-1" data-aos="fade-right" data-aos-delay="500" data-aos-once="true">
                        <p className="p-2 text-xs md:text-lg">
                            As I strive to achieve my goal of becoming a full-stack developer, I
                            have acquired valuable experience through the completion of various
                            projects at a beginner level, and my accumulated years of
                            programming and project work. Moreover, I possess a notable aptitude
                            for self-directed learning and am able to apply myself to acquiring
                            new skills within a constrained time frame.
                        </p>
                        <Link target="_blank" href="/assets/resume/myResume.pdf" className="w-fit mx-auto sm:mx-0 bg-[#6e40c9] p-2 rounded-lg text-sm mt-auto transition-all ease-in delay-100 duration-300 hover:shadow-lg hover:shadow-[#a67aff]/50" download>
                            Download Cv`📜
                        </Link>
                    </div>
                    <div className="order-1 sm:flex-1 sm:order-2 mx-auto" data-aos="fade-left" data-aos-delay="750" data-aos-once="true">
                        <Image
                            src="/assets/backgrounds/bg.jpeg"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="h-full w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-auto mb-4 animate-bounce ">
                <Scroll comp={"skills"} />
            </div>
        </div>
    );
};

export default Summary;
