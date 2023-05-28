import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'

function ScrollTop() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        document.addEventListener('scroll', onScroll);
        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    }, []);
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            delay: 0,
            smooth: true,
        });
    };
    return (
        <Link to=''
            className={`w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center transition-all ease-in duration-150 rounded-3xl bg-github-purple text-black fixed top-[90%] right-4 animate-bounce cursor-pointer ${scrolled ? "block" : "hidden"}`}
            onClick={scrollToTop}>
            <Icon icon="mdi:arrow-top" className='text-4xl text-white' />
        </Link>

    )
}

export default ScrollTop