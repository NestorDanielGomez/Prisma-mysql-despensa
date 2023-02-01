import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { formatearDinero } from "../helpers";
export default function Orden({ orden }) {
  const { id, nombre, total, pedido } = orden;
  const completarOrden = async () => {
    try {
      await axios.post(`/api/ordenes/${id}`);
      toast.success("Orden Lista");
    } catch (error) {
      toast.success("Hubo un Error");
    }
  };
  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Orden: {id} </h3>
      <p className="text-lg my-10 font-bold">Cliente: {nombre}</p>
      <div className="">
        {pedido.map((item) => (
          <div
            key={item.id}
            className="py-3 flex border-b last-of-type:border-0 items-center">
            <div className="w-32">
              <Image
                height={250}
                width={150}
                alt={`imagen ${item.nombre}`}
                src={`/assets/img/${item.imagen}.jpg`}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-600">
                {item.nombre}
              </h4>
              <p className="text-lg font-bold">
                {`Cantidad: ${item.cantidad}`}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-600">
          Total a Pagar:{formatearDinero(total)}
        </p>
        <button
          type="button"
          onClick={completarOrden}
          className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg">
          Completar Orden
        </button>
      </div>
    </div>
  );
}
