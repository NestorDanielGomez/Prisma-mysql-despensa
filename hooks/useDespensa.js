import { useContext } from "react";
import DespensaContext from "context/DespensaProvider";

const useDespensa = () => {
  return useContext(DespensaContext);
};

export default useDespensa;
