import React from "react";
import styles from "../style";
import { hero_black, hero_white, cv } from "../assets";
import { useState } from "react";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex-col ${styles.flexStart} xl:px-0 sm:px-16 px-6 gap-8`}
      >
        <p className=" font-poppins sm:text-[40px] text-[20px] font-medium tracking-wide text-primary w-[90%]">
          Hi I’m Chabbeh Mohamed Amine a motivated software engineer and a UI/UX
          designer
        </p>
        <div className="flex ss:justify-start justify-center items-center gap-4 ss:gap-8">
          <a href={cv} download="Resume">
            <button className="border-solid border-2 border-primary ss:pl-12 ss:pr-12 pl-6 pr-6 pt-3 pb-3 bg-primary hover:bg-secondary text-secondary hover:text-primary transition font-medium hover:font-semibold font-poppins tracking-wider text-[10px] ss:text-base ">
              Download CV
            </button>
          </a>
          <a href={"#contact"}>
            <button className="border-solid border-2 border-primary ss:pl-12 ss:pr-12 pl-6 pr-6 pt-3 pb-3 bg-white hover:bg-primary  text-primary hover:text-secondary transition font-semibold hover:font-medium font-poppins tracking-wider text-[10px] ss:text-base ">
              Contact me
            </button>
          </a>
        </div>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={isClicked ? hero_black : hero_white}
          alt="Sphere"
          className="w-[1582px] h-[400px] ss:h-[500px] object-contain relative radius-[20px] cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default Home;
