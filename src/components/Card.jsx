import { Project1 } from '../assets';

const Card = ({ title, content, image }) => {
  return (
    <div className=" border-solid border-2 border-primary w-[300px] h-[400px] flex justify-center items-center">
      <p className="">{title}</p>
    </div>
  );
};

export default Card;
