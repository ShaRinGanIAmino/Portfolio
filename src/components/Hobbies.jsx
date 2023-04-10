import {
  volley,
  books,
  music,
  football,
  camping,
  netflix,
  gaming,
  gym,
  discord,
} from "../assets";

const Hobbies = () => {
  return (
    <section
      id="hobbies"
      className="flex flex-col mt-24 ss:mt-44 justify-center items-center gap-24 text-primary"
    >
      <p1 className=" font-poppins font-semibold text-4xl tracking-wide text-center leading-10">
        HOBBIES AND INTERESTS
      </p1>
      <div className=" flex flex-wrap w-[80%] ss:w-[30%] gap-16 justify-center items-center">
        <img
          src={volley}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="volley"
        />
        <img
          src={music}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="music"
        />
        <img
          src={gaming}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="gaming"
        />
        <img
          src={netflix}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="netflix"
        />
        <img
          src={discord}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="discord"
        />
        <img
          src={camping}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="camping"
        />
        <img
          src={books}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="books"
        />
        <img
          src={gym}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="gym"
        />
        <img
          src={football}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="volley"
        />
      </div>
    </section>
  );
};

export default Hobbies;
