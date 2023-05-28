import { Icon } from "@iconify/react";
import { Link } from "react-scroll";

type scrollProps = {
    comp: string
}
function Scroll({ comp }: scrollProps) {


    return (
        <Link
            activeClass="active"
            to={comp}
            spy={true}
            smooth={true}
            duration={100}
            className="cursor-pointer"
        >
            <Icon icon="gg:mouse" className="text-2xl" />
        </Link>
    )
}

export default Scroll;