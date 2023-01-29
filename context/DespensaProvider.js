import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const DespensaContext = createContext();

const DespensaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

  const router = useRouter();

  const getCategorias = async () => {
    try {
      const { data } = await axios("./api/categorias");
      setCategorias(data.categorias);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
    router.push("/");
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };
  //saco algunas props que no necesito
  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      // Actualizar la cantidad
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);
      toast.success("Pedido Actualizado con exito");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al Pedido");
    }

    setModal(false);
  };
  const handleEditarCantidad = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id);
    setProducto(productoActualizar[0]);
    setModal(!modal);
  };

  const handleEliminarProducto = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
  };
  return (
    <DespensaContext.Provider
      value={{
        categorias,
        handleClickCategoria,
        categoriaActual,
        handleSetProducto,
        producto,
        handleChangeModal,
        modal,
        handleAgregarPedido,
        pedido,
        handleEditarCantidad,
        handleEliminarProducto,
      }}>
      {children}
    </DespensaContext.Provider>
  );
};

export { DespensaProvider };

export default DespensaContext;
