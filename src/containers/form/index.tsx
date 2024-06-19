import {memo} from "react";


interface IProps {
  children: React.ReactNode;
}

const Form: React.FC<IProps> = ({children}) => {

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    
  )
}

export default memo(Form);