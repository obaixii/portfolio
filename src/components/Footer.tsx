import Link from "next/link";
import Title from "./Title";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer id="contact" className="py-16	bg-[#282a2d] h-full w-full flex flex-col justify-center items-center text-center">
      <span className="text-white"><Title title={"Contact"} /></span>
      <div className="w-full flex justify-center md:justify-between flex-wrap px-8 [&>*:nth-child(n)]:p-2">
        <div className="w-full md:w-1/3">
          <div className="w-fit flex flex-col gap-4 mx-auto md:mx-0">
            <h1 className="font-light text-gray-100/40">&lt;Social Links&#47;&gt;</h1>
            <div className="flex justify-between gap-2">

              {/* Linkedin Icon */}
              <Link href="https://linkedin.com/in/obaixii" target="_blank" title="Follow me on Linkedin">
                <div className="group/icon w-10 h-10 flex justify-center items-center rounded-full bg-white transition-all ease-in duration-300 hover:bg-[#0076b2]">
                  <Icon icon="ri:linkedin-fill" className="text-2xl text-[#282a2d] group-hover/icon:text-white transition-all ease-in duration-100" />
                </div>
              </Link>

              {/* Github Icon */}
              <Link href="https://github.com/obaixii" target="_blank" title="Follow me on Github">
                <div className="group/icon w-10 h-10 flex justify-center items-center rounded-full bg-white transition-all ease-in duration-300 hover:bg-[#181616]">
                  <Icon icon="mingcute:github-line" className="text-2xl text-[#282a2d] group-hover/icon:text-white transition-all ease-in duration-100" />
                </div>
              </Link>

              {/* Instagram Icon */}
              <Link href="https://instagram.com/obaixii" target="_blank" title="Follow me on Instagram">
                <div className="group/icon w-10 h-10 flex justify-center items-center rounded-full bg-white transition-all ease-in duration-300 hover:bg-instagram">
                  <Icon icon="uil:instagram" className="text-2xl text-[#282a2d] group-hover/icon:text-white transition-all ease-in duration-100" />
                </div>
              </Link>

              {/* Facebook Icon */}
              <Link href="https://facebook.com/obaixii" target="_blank" title="Follow me on Facebook">
                <div className="group/icon w-10 h-10 flex justify-center items-center rounded-full bg-white transition-all ease-in duration-300 hover:bg-[#1877F2]">
                  <Icon icon="basil:facebook-solid" className="text-2xl text-[#282a2d] group-hover/icon:text-white transition-all ease-in duration-100" />
                </div>
              </Link>

              {/* Twitter Icon */}
              <Link href="https://twitter.com/obaixii" target="_blank" title="Follow me on Twitter">
                <div className="group/icon w-10 h-10 flex justify-center items-center rounded-full bg-white transition-all ease-in duration-300 hover:bg-[#1d9bf0]">
                  <Icon icon="cib:twitter" className="text-2xl text-[#282a2d] group-hover/icon:text-white transition-all ease-in duration-100" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="font-light text-gray-100/40">&lt;Email me&#47;&gt;</h1>
          <Link className="flex flex-col justify-center align-middle items-center" href="mailto:obaidawan567@gmail.com" target="_blank" title="Follow me on Instagram">
            <span title="Mail me 📧" className="hover:underline">Get in Touch with me</span>
            <div className="w-10 h-10 flex justify-center items-center rounded-full" title="Send an Email📧">
              <Icon icon="fxemoji:email" className="text-2xl" />
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="font-light text-gray-100/40">&lt;Credits&#47;&gt;</h1>
          <h1 >Developed by &copy; <br />
            <span className="relative text-white">Obaid ur Rehman Awan</span>
          </h1>

        </div>
      </div>
    </footer>
  )
}

export default Footer;
