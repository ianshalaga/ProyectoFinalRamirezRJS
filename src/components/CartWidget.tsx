import { Link } from "react-router-dom";
import { urls } from "../utils/routes";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cartIcon from "../assets/icons/cart.svg";

const CartWidget = () => {
  const { itemsInCart } = useContext(CartContext);

  return (
    <div className="flex justify-center items-center">
      <Link
        className="col-span-1 flex justify-center items-center"
        to={urls.cart}
      >
        <img src={cartIcon} alt="Cart Icon" className="w-6 m-1 text-sky-100" />
        {itemsInCart()}
      </Link>
    </div>
  );
};

export default CartWidget;
