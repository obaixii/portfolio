import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0 || window.pageYOffset !== 0) {
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
    <nav className={`fixed w-screen h-fit flex justify-between items-center p-2 xs:p-6 text-md md:text-lg lg:text-xl z-10 transition ease-in duration-300   ${scrolled ? "bg-[#6e40c9] " : "bg-transparent"}`}>
      <Link to="/" href="/" className='w-1/5' onClick={scrollToTop}>Obaxii</Link>
      <ul className="flex justify-end w-1/4 gap-4">
        <Link activeClass="active" to="summary" spy={true} smooth={true}
          duration={100} className="cursor-pointer" >
          About
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true}
          duration={100} className="cursor-pointer">
          Work
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true}
          duration={100} className="cursor-pointer">
          Contact
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar;
