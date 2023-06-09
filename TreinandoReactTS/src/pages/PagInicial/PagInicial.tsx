import { useCallback, useState } from "react";

export const PagInicial = () => {
  const [lista, setLista] = useState<string[]>([""]);
const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
  if(e.key === 'Enter') {
    if(e.currentTarget.value.trim().length === 0) return;
    //forma 1 de inserir itens na lista
    // setLista([...lista, e.currentTarget.value]);

    const value = e.currentTarget.value;
    e.currentTarget.value = '';
    setLista((oldLista) => {
      return [...lista, value];
    });
  } 
  return(
    <h1>aol</h1>
  )
}, [lista]);

  return (
    <>
      <p>Lista</p>
      <input 
        onKeyDown={handleInputKeyDown}
      />
      <ul>
        {lista.map((value, index) => {
        return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
};
