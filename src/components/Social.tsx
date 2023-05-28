import Link from "next/link";
import {social} from "../data/social";

function Social() {
    return (
        <div className="w-fit flex flex-col gap-4 justify-center item-center mx-auto">
            {

                social.map((social, index) => {
                    return (
                        <Link className="inline cursor-pointer" href={social.link} key={index}>
                            <span className="inline w-fit text-white hover:text-blue-500">
                                {social.icon}
                            </span>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Social