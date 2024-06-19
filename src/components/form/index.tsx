import {memo} from "react";
import styles from "./style.module.css";

interface IProps {
  onSubmit: () => void;
  children: React.ReactNode;
}

const Form: React.FC<IProps> = ({onSubmit, children}) => {

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.content}>
        {children}
      </div>
      <button type='submit'>Save</button>
    </form>
  )
}

export default memo(Form);