import {memo} from "react";
import styles from "./style.module.css";

interface IProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<IProps> = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default memo(PageLayout);