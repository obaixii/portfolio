import { Scroll } from "./index";

function Layout({ children, id, comp }) {

    return (
        <div id={id} className="h-screen flex flex-col justify-center items-center text-center">
            <div className="mt-auto">
                <div className="w-fit mx-auto "></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                {children}
            </div>
            <div className="mt-auto animate-bounce mb-8">
                <Scroll comp={comp} />
            </div>
        </div>
    )
}

export default Layout