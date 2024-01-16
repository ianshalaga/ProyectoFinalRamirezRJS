interface ItemQuantitySelectorProps {
  cantidad: number;
  setCantidad: (newCantidad: number) => void;
  stock: number;
}

const ItemQuantitySelector: React.FC<ItemQuantitySelectorProps> = ({
  cantidad,
  setCantidad,
  stock,
}) => {
  const handleAdd = () => {
    stock > cantidad && setCantidad(cantidad + 1);
  };

  const handleSubtract = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="flex flex-row gap-1 items-center align-middle">
      <button
        onClick={handleSubtract}
        className="bg-sky-900 text-sky-50 font-semibold px-2 py-1 rounded-md"
      >
        -
      </button>

      <p>{cantidad}</p>

      <button
        onClick={handleAdd}
        className="bg-sky-900 text-sky-50 font-semibold px-2 py-1 rounded-md"
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
