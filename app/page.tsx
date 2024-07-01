import HomeImage from '../components/HomeImage';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import Header from '../components/Header';


export default function Home() {
  return (
    <div>
      <Header />
      <HomeImage />
      <div className="main-content">
        <Projects />
        <About />
        <Contact />
      </div>
    </div>

  );
}
