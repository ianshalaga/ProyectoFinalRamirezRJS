import { useState, useContext } from "react";
import {
  albumsImagesPath,
  imagesExtension,
  AlbumData,
  ItemData,
} from "../utils/utils";
import ItemQuantitySelector from "./ItemQuantitySelector";
import SongList from "./SongList";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { urls } from "../utils/routes";

interface ItemDetailProps {
  item: AlbumData;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const navigate = useNavigate();

  const { addItemToCart, isInCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const itemToCart: ItemData = {
      ...item,
      quantity: cantidad,
    };

    addItemToCart(itemToCart);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <article className="flex flex-col items-center p-4">
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-col justify-around">
          <h2 className="font-bold">{item.name}</h2>

          <img
            className="w-80 p-4"
            src={albumsImagesPath + item.image + imagesExtension}
            alt={item.name}
          />
        </div>

        <div className="flex flex-col justify-between w-1/2">
          <p className="font-light p-4">{item.description}</p>
          <p className="p-4 font-extrabold">{item.price}</p>
        </div>
      </div>

      {!isInCart(item.id) ? (
        <div className="flex gap-4 mb-4">
          <p>Seleccione la cantidad de copias que desea llevar:</p>

          <ItemQuantitySelector
            cantidad={cantidad}
            setCantidad={setCantidad}
            stock={item.stock}
          />

          <button
            className="bg-sky-900 text-sky-50 font-semibold px-2 py-1 rounded-md"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        </div>
      ) : (
        <Link
          className="bg-sky-900 text-sky-50 font-semibold px-2 py-1 rounded-md my-3"
          to={urls.cart}
        >
          Ir al carro
        </Link>
      )}

      <button
        onClick={handleGoBack}
        className="bg-sky-900 text-sky-50 font-semibold px-2 py-1 rounded-md"
      >
        Volver
      </button>

      <p className="p-4">Lista de canciones:</p>

      <SongList songs={item.songs} />
    </article>
  );
};

export default ItemDetail;
