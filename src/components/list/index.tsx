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
      list.map(item =>
        <div key={item.id} className={styles.item}>
          {renderItems(item)}
        </div>
      )}
    </div>
  )
}

export default memo(List);