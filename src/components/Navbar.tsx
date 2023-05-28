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
    <nav className={`w-full h-fit flex justify-between items-center p-4 xs:p-6 text-sm md:text-md lg:text-lg fixed inset-0 z-10 ${scrolled ? 'bg-[#151030] transition-all ease-in-out duration-700	 ' : 'bg-transparent transition-all ease-in-out duration-700'}`}>
      <Link to="/" href="/" onClick={scrollToTop}>Obaxii</Link>
      <div className="flex justify-between gap-4">
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
      </div>
    </nav>
  )
}

export default Navbar;
