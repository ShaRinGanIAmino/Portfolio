import {
  adobe,
  c,
  figma,
  html,
  java,
  linux,
  mongodb,
  python,
  react,
  sql,
  tailwind,
  css,
} from "../assets";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col mt-24 ss:mt-44 justify-center items-center gap-24 text-primary"
    >
      <p1 className=" font-poppins font-semibold text-4xl tracking-wide">
        Skills
      </p1>
      <div className=" flex flex-wrap w-[80%] ss:w-[40%] gap-16 justify-center items-center">
        <img
          src={figma}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="figma"
        />
        <img
          src={adobe}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="adobe illustrator"
        />
        <img
          src={html}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="html"
        />
        <img
          src={css}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="css"
        />
        <img
          src={react}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="react"
        />
        <img
          src={tailwind}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="tailwind"
        />
        <img
          src={mongodb}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="mongodb"
        />
        <img
          src={sql}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="sql"
        />
        <img
          src={java}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="java"
        />
        <img
          src={python}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="python"
        />
        <img
          src={c}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="c++"
        />
        <img
          src={linux}
          className=" w-[40px] ss:w-[60px] h-[40px] ss:h-[60px]  object-contain opacity-70 hover:opacity-100"
          alt="linux"
        />
      </div>
    </section>
  );
};

export default Skills;
