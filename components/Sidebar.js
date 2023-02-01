import Image from "next/image";
import useDespensa from "../hooks/useDespensa";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useDespensa();

  return (
    <>
      <Image
        width={150}
        height={100}
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
        className="text-center"
      />
      <nav className="mt-10">
        {categorias?.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
