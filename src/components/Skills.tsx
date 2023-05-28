import Card from "./Card"
import { Title, Scroll } from "./index"

function Skills() {
    return (
        <div id="skills" className="h-screen flex flex-col justify-center items-center text-center">
            <div className="mt-auto">
                <div className="w-fit mx-auto"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <Title title="Skills" />
                <div className="w-full flex gap-4 justify-center flex-wrap px-8 ">
                    <Card type="Frontend" dataAos="fade-up" dataDelayAos="750" />
                    <Card type="Backend" dataAos="fade-up" dataDelayAos="1000" />
                    <Card type="Others" dataAos="fade-up" dataDelayAos="1250" />
                    <Card type="Soft Skills" dataAos="fade-up" dataDelayAos="1500" />
                </div>
            </div>
            <div className="mt-auto mb-4 animate-bounce">
                <Scroll comp={"projects"} />
            </div>
        </div>
    )
}

export default Skills