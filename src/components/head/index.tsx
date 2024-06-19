import {memo} from "react";
import styles from "./style.module.css";

interface IProps {
  title: string | undefined;
}

const Head: React.FC<IProps> = ({title}) => {
  return (
    <div className={styles.head}>
      <h1>{title}</h1>
    </div>
  )
}

export default memo(Head);