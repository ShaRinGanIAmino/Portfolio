import {
  About,
  Contact,
  Navbar,
  Projects,
  Home,
  Hobbies,
  Experience,
  Skills,
} from './components';

const App = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" w-[90%]">
        <Navbar />
      </div>
      <div className="w-[90%]">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hobbies />
        <Contact />
      </div>
    </div>
  );
};

export default App;
