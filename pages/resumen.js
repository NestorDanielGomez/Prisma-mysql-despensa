import Layout from "../layout/Layout";
import ResumenProducto from "components/ResumenProducto";
import useDespensa from "hooks/useDespensa";

export default function Resumen() {
  const { pedido } = useDespensa();
  return (
    <Layout pagina="resumen">
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Controla tu pedido:</p>
      {pedido.length == 0 ? (
        <p className="text-center text-2xl">No hay productos en tu pedido</p>
      ) : (
        pedido.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
