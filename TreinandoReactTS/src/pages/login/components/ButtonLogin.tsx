interface IButtonLoginProps {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  name: string;
  children?: React.ReactNode;
}


export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, name}) => {

  return(
    <button type={type} onClick={onClick}>
      {name}
    </button>
  )
}