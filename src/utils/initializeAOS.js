import AOS from 'aos';
import 'aos/dist/aos.css';

const initializeAOS = () => {
  AOS.init({
    delay:0,
    once: false
  });
};

export default initializeAOS;
