import { useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { useUsuarioLogado } from "../../shared/hooks";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usuarioLogadoContext = useUsuarioLogado();

  const handleEntrar = () => {
    console.log(email)
    console.log(password)
  }
  return (
    <div>
      <form>
        <p>{usuarioLogadoContext.nomeDoUsuario}</p>
        <InputLogin 
        label="Email" 
        value={email}
        type="email"
        onChange={setEmail}/>
        
        <InputLogin 
        label="Senha" 
        value={password }
        type="password"
        onChange={setPassword}/>
        <ButtonLogin name="Entrar" type="button" onClick={handleEntrar}/>
        <ButtonLogin name="Esqueci minha senha" type="button" onClick={handleEntrar}/>

      </form>
    </div>
  );
};
