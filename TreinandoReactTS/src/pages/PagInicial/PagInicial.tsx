import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const PagInicial = () => {
  const counterRef = useRef({ counter: 0})

  return (
    <>
      <p>PagInicial</p>
      <p>Contador: {counterRef.current.counter}</p>
      <button onClick={() => counterRef.current.counter++}>somar</button>
      <Link to="/entrar">Login</Link>
    </>
  );
};
