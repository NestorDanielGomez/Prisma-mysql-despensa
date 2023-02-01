import Image from "next/image";
import { formatearDinero } from "../helpers";
import useDespensa from "../hooks/useDespensa";

const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useDespensa();
  const { imagen, nombre, precio } = producto;
  return (
    <div className="border p-3">
      <Image
        height={700}
        width={450}
        alt={`imagen ${nombre}`}
        src={`/assets/img/${imagen}.jpg`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-3xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleChangeModal();
            handleSetProducto(producto);
          }}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
