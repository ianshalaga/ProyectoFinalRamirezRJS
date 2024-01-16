import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { albumsImagesPath, imagesExtension } from "../utils/utils";
import { Link } from "react-router-dom";
import { urls } from "../utils/routes";

const Cart = () => {
  const { cart, totalPrice, clearCart, itemsInCart } = useContext(CartContext);

  return (
    <section className="flex flex-col justify-center items-center m-5">
      <h2 className="font-semibold">Contenido del carrito</h2>
      <ul>
        {cart.map((item, index) => (
          <li
            key={index}
            className="flex items-center p-3 gap-6 flex-wrap my-4 bg-sky-200 rounded-lg shadow-lg overflow-hidden transition duration-500 hover:bg-sky-300"
          >
            <img
              className="w-20"
              src={albumsImagesPath + item.image + imagesExtension}
              alt={item.name}
            />
            <h3 className="">{item.name}</h3>
            <p className="font-semibold">$ {item.price}</p>
            <p className="font-light">Cantidad: {item.quantity}</p>
            <p className="font-bold">Total $: {item.quantity * item.price}</p>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <h4 className="font-sans">Precio total $:</h4>
        <h4 className="font-semibold">{totalPrice()}</h4>
      </div>

      {itemsInCart() > 0 && (
        <button
          className="bg-sky-900 text-sky-50 font-semibold px-2 py-1 rounded-md"
          onClick={clearCart}
        >
          Vaciar carrito
        </button>
      )}

      <Link
        to={urls.checkout}
        className="bg-sky-900 text-sky-50 font-semibold px-2 py-1 rounded-md mt-4"
      >
        Finalizar compra
      </Link>
    </section>
  );
};

export default Cart;
