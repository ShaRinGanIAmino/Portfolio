import { Project1, project2, project3, project4 } from "../assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col mt-24 ss:mt-44 justify-center items-center gap-10 text-primary"
    >
      <p1 className=" font-poppins font-semibold text-4xl tracking-wide">
        Projects
      </p1>
      <div className=" flex gap-10 mt-12 flex-wrap justify-center items-center">
        <div className=" flex flex-col justify-center items-center gap-8 p-10 border-solid border-2 border-gray-200 w-[300px] h-[400px] hover:border-primary ">
          <p className=" font-poppins font-semibold text-base">All Drive</p>
          <p className=" text-xs">
            {" "}
            A concept design project made to showcase how can you combine all
            your cloud ressources into one app.
            <br />
            <br />
            <a
              href="https://www.behance.net/gallery/164801307/All-Drive"
              className=" font-medium text-primary text-xs hover:text-green-600"
            >
              Link to the project
            </a>
          </p>
          <img className=" object-contain" src={Project1} alt="Project1" />
        </div>
        <div className=" flex flex-col justify-center items-center gap-8 p-10 border-solid border-2 border-gray-200 w-[300px] h-[400px] hover:border-primary ">
          <p className=" font-poppins font-semibold text-base">
            Yugioh card games
          </p>
          <p className=" text-xs">
            {" "}
            A web app with the purpose of having a place where i can manage my
            card decks using the Yugioh API .
            <br />
            <br />
            <a
              href="https://www.behance.net/gallery/153014717/Card-games-Web-App"
              className=" font-medium text-primary text-xs hover:text-green-600"
            >
              Case study and design link
            </a>
            <br />
            <a
              href="https://www.behance.net/gallery/164801307/All-Drive"
              className=" font-medium text-primary text-xs hover:text-green-600"
            >
              The project code link
            </a>
          </p>
          <img className=" object-contain" src={project2} alt="Project2" />
        </div>
        <div className=" flex flex-col justify-center items-center gap-8 p-10 border-solid border-2 border-gray-200 w-[300px] h-[400px] hover:border-primary ">
          <p className=" font-poppins font-semibold text-base">E-commerce</p>
          <p className=" text-xs">
            {" "}
            E-commerce website designed and implemented to showcase simplicity
            through design.
            <br />
            <br />
            <a
              href="https://www.figma.com/file/hSIdnDJunWuUKpOT7z02Ff/E-commerce-shoes?node-id=0%3A1&t=jv4YAor9uYS9wU3D-"
              className=" font-medium text-primary text-xs hover:text-green-600"
            >
              Figma design link
            </a>
            <br />
            <a
              href="https://melodious-churros-fb42e6.netlify.app/"
              className=" font-medium text-primary text-xs hover:text-green-600"
            >
              The project link
            </a>
          </p>
          <img className=" object-contain" src={project3} alt="Project3" />
        </div>
        <div className=" flex flex-col justify-center items-center gap-8 p-10 border-solid border-2 border-gray-200 w-[300px] h-[400px] hover:border-primary ">
          <p className=" font-poppins font-semibold text-base">Food</p>
          <p className=" text-xs">
            {" "}
            Food recommandation website designed and implemented to showcase
            simplicity through design.
            <br />
            <br />
            <a
              href="https://www.figma.com/file/nsvAVwOz06eaiKU6AktOFH/FOOD?node-id=0%3A1&t=UY6z1MvN0i86XyAo-1"
              className=" font-medium text-primary text-xs hover:text-green-600"
            >
              Figma design link
            </a>
            <br />
            <a
              href="https://majestic-lily-adddff.netlify.app"
              className=" font-medium text-primary text-xs hover:text-green-600"
            >
              The project link
            </a>
          </p>
          <img className=" object-contain" src={project4} alt="Project4" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
