import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ordersCollection } from "../utils/utils";

const Checkout = () => {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    emailRepeat: "",
  });
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Guardar esta orden en la base de datos
    const ordenCompra = {
      cliente: values,
      productos: cart,
      total: totalPrice(),
      fecha: new Date(),
      estado: "generada",
    };

    const ordersRef = collection(db, ordersCollection);
    addDoc(ordersRef, ordenCompra).then((doc) => {
      setOrderId(doc.id);
      clearCart();
    });
  };

  // Conditional render
  if (orderId) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p>
          Compra finalizada. Su código de orden es:{" "}
          <span className="font-semibold">{orderId}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs m-10">
      <h2 className="font-extrabold">Checkout</h2>
      <p className="p-2">Ingrese sus datos:</p>

      <form
        className="bg-sky-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {/* Nombre */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nombre"
            value={values.nombre}
            onChange={handleInputChange}
            name="nombre"
          />
        </div>

        {/* Apellido */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="surname"
          >
            Apellido
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="surname"
            type="text"
            placeholder="Apellido"
            value={values.apellido}
            onChange={handleInputChange}
            name="apellido"
          />
        </div>

        {/* Teléfono */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="telephone"
          >
            Teléfono
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telephone"
            type="text"
            placeholder="Teléfono"
            value={values.telefono}
            onChange={handleInputChange}
            name="telefono"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
        </div>

        {/* Repeat Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Repeat Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emailRepeat"
            type="email"
            placeholder="Repeat Email"
            value={values.emailRepeat}
            onChange={handleInputChange}
            name="emailRepeat"
          />
        </div>

        {values.nombre !== "" &&
        values.apellido !== "" &&
        values.telefono !== "" &&
        values.email !== "" &&
        values.emailRepeat !== "" ? (
          values.email !== values.emailRepeat ? (
            <p>Repita correctamente su email</p>
          ) : (
            <button
              type="submit"
              className="bg-sky-900 text-sky-50 font-semibold px-2 py-1 rounded-md mt-4"
            >
              Realizar compra
            </button>
          )
        ) : (
          <p>Complete el formulario</p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
