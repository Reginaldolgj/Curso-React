import { useContext } from "react";
import { UsuarioLogadoContext } from "../../shared/contexts";


export const useUsuarioLogado = () => {
  const context = useContext(UsuarioLogadoContext);
  return context;

}