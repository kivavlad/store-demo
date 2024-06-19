import {memo} from "react";
import {IProduct} from "../../types/i-product";
import styles from "./style.module.css";

interface IProps {
  list: IProduct[];
  renderItems: (item: IProduct) => React.ReactNode;
}

const List: React.FC<IProps> = ({list, renderItems}) => {
  return (
    <div className={styles.list}>{
      list.map(item => (
        renderItems(item)
      ))}
    </div>
  )
}

export default memo(List);