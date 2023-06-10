import { useCallback, useState } from "react";

interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}
export const PagInicial = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;
        //forma 1 de inserir itens na lista
        // setLista([...lista, e.currentTarget.value]);

        const value = e.currentTarget.value;

        e.currentTarget.value = "";

        setLista((oldLista) => {
          if (oldLista.some((ListItem) => ListItem.title === value)) return oldLista;

          return [
            ...oldLista,
            {
              id: oldLista.length,
              title: value,
              isCompleted: false,
            },
          ];
        });
      }
    }, []);

  return (
    <>
      <p>Lista</p>
      <input onKeyDown={handleInputKeyDown} />
      <p>{lista.filter((ListItem) => ListItem.isCompleted).length}</p>
      <ul>
        {lista.map((ListItem) => { return <li key={ListItem.id}>
              <input
                type="checkbox"
                onChange={() => {
                  setLista((oldLista) => {
                    return oldLista.map((oldListItem) => {
                      const newIsSelected =
                        oldListItem.title === ListItem.title
                          ? !oldListItem.isCompleted
                          : oldListItem.isCompleted;

                      return {
                        ...oldListItem,
                        isSelect: newIsSelected,
                      };
                    });
                  });
                }}
              />
              {ListItem.title}
            </li>
        })}
      </ul>
    </>
  );
};
