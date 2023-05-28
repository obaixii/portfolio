import { Title } from "./index";
import { projects } from "../data/projects";
import Image from "next/image";
import Link from "next/link";
function Projects() {
  return (
    <div id="projects" className="h-full flex flex-col justify-center items-center text-center py-8">
      <Title title={"Projects"} />
      <div className="container mx-auto p-8">
        <div className="flex flex-wrap -mx-4 ">
          {
            projects.map((project, i) => {
              return (
                <Link href={project.url} target="_blank" key={i} className="group w-full basis-2/4 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 gap-4 p-2 ">
                  <div className="bg-[#151030] p-1 rounded-lg bg-gradient-to-r from-[#00cea8] to-[#bf61ff] h-full">
                    <div className="h-full overflow-hidden shadow-lg shadow-cyan-500/50">
                      <div className="relative pb-16 md:pb-48 overflow-hidden">
                        <Image className="absolute inset-0 h-full w-full object-cover transition-all duration-150 ease-in group-hover:scale-110" width={500} height={500} src={project.image} alt="" />
                      </div>
                      <div className="h-full flex-1 block bg-[#1d1839] shadow-md hover:shadow-xl overflow-hidden ">
                        <div className="p-2 md:p-4">
                          <h2 className="text-sm md:text-lg mt-2 mb-2 text-white font-bold">{project.title}</h2>
                          <p className="w-16 text-ellipsis whitespace-nowrap overflow-hidden mx-auto sm:w-full sm:whitespace-normal text-xs sm:text-sm md:text-sm text-white ">{project.description}</p>
                          <div className=" flex w-fit justify-center flex-wrap  items-center mx-auto gap-2">
                            {
                              project.languages.map((lang, index) => {
                                return (
                                  <div key={index} className="rounded-md ">
                                    <span className="text-[8px] sm:text-xs md:p-1 text-transparent bg-clip-text bg-gradient-to-r from-react via-redux to-javascript animate-text">#{lang}</span>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Projects