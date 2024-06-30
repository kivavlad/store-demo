import React, {memo} from "react";
import styles from "./style.module.css";

interface IProps {
  children: React.ReactNode;
}

const CategoriesLayout: React.FC<IProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default memo(CategoriesLayout);