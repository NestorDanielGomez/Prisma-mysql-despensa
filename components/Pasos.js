import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menu", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y total", url: "/total" },
];

const Pasos = () => {
  const router = useRouter();
  const calcularProgresoPedido = () => {
    let valor;
    if (router.pathname === "/") valor = 1;
    else if (router.pathname === "/resumen") valor = 50;
    else if (router.pathname === "/total") valor = 100;
    return valor;
  };

  return (
    <>
      <div className=" flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            className="text-2xl font-bold"
            key={paso.paso}
            onClick={() => {
              router.push(paso.url);
            }}>
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-300 mb-10">
        <div
          style={{ width: `${calcularProgresoPedido()}%` }}
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"></div>
      </div>
    </>
  );
};

export default Pasos;
