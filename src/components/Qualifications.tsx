import { Title, Scroll } from "./index";
import { education } from "../data/info";

function Qualifications() {
    return (
        <div id="qualifications" className="h-screen flex flex-col justify-center items-center text-center">
            <div className="mt-auto">
                <div className="w-fit mx-auto "></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <Title title={"Qualifications"} />

            </div>
            <div className="mt-auto animate-bounce">
                <Scroll comp="projects" />
            </div>
        </div>
    )
}

export default Qualifications;