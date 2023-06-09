import { ReactNode, createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

interface IChildren {
  children: ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
);

export const UsuarioLogadoProvider: React.FC<IChildren> = ({ children }) => {
  const handleLogout = useCallback(() => {
    console.log("handleLogout executo")
  }, []);

  return (
    <UsuarioLogadoContext.Provider
      value={{ nomeDoUsuario: "Reginaldo", logout: handleLogout }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
