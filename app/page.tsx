import HomeImage from '../components/HomeImage';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <HomeImage />
      <div className="main-content">
        
        <About />
        <Projects />
        <Contact />
      </div>
    </div>

  );
}
