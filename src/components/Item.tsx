import { Link } from "react-router-dom";

interface ItemProps {
  name: string;
  image: string;
  url: string;
}

const Item: React.FC<ItemProps> = ({ name, image, url }) => {
  return (
    <Link
      to={url}
      // className="flex flex-col items-center flex-wrap my-4 bg-sky-200 rounded-lg shadow-lg overflow-hidden"
      className="flex flex-col items-center flex-wrap my-4 bg-sky-200 rounded-lg shadow-lg overflow-hidden transition duration-500 hover:bg-sky-300"
    >
      <article className="flex flex-col items-center p-4">
        <h2 className="font-bold">{name}</h2>
        <img className="w-80 p-4 object-cover" src={image} alt={name} />
      </article>
    </Link>
  );
};

export default Item;
