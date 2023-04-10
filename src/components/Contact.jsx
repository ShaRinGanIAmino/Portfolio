import { socialMedia } from "../constants";
import { arrow } from "../assets";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col mt-24 ss:mt-44 mb-12 ss:mb-22 justify-center items-center gap-40 text-primary"
    >
      <p1 className=" font-poppins font-semibold text-4xl tracking-wide">
        Let's connect
      </p1>
      <div className=" flex flex-wrap w-[90%] ss:w-[40%] gap-10 sm:gap-14 justify-center items-center">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt="SocialMedia"
            className=" w-[30px] ss:w-[45px] h-[30px] ss:h-[45px]  object-contain cursor-pointer"
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      <p1 className=" font-poppins font-medium text-xstracking-wide">
        aminoschabbeh12345@gmail.com
      </p1>
      <a href={"#home"}>
        <img
          src={arrow}
          alt="Arrow"
          className="w-[15px] ss:w-[22px] h-[15px] ss:h-[22px]  object-contain cursor-pointer"
        />
      </a>
    </section>
  );
};

export default Contact;
