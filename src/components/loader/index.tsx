import {memo} from "react";
import styles from "./style.module.css";

interface IProps {
  active: boolean;
  children: React.ReactNode;
}

const Loader: React.FC<IProps> = ({active, children}) => {
  if (active) {
    return (
      <div className={styles.loader}>
        {children}
      </div>
    )
  } else {
    return children;
  }
}

export default memo(Loader);