import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import useDespensa from "../hooks/useDespensa";

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden } = useDespensa();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina="resumen">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirmar Pedido a continuación</p>
      <form onSubmit={colocarOrden}>
        <div className="">
          <label
            htmlFor="nombre"
            className="block text-xl font-bold uppercase text-slate-800"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}>
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="mt-3 bg-gray-200 w-full lg:w-1/3 p-2 rounded-md"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {``} <span className="font-bold">$200</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            value="Confirmar Pedido"
            className={`${
              comprobarPedido()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-900"
            } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white  text-center`}
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
