import Image from "next/image";
import useDespensa from "hooks/useDespensa";

const Categoria = ({ categoria }) => {
  const { id, nombre, icono } = categoria;
  const { handleClickCategoria, categoriaActual } = useDespensa();

  return (
    <div
      className={` ${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400 `}>
      <Image
        alt={`image categoria`}
        width={50}
        height={50}
        src={`/assets/img/icono_${icono}.svg`}
        className={""}
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}>
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
