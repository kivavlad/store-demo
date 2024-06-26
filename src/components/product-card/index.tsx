import {memo} from "react";
import {Link} from "react-router-dom";
import {IProduct} from "../../types/i-product";
import {numberFormat} from "../../utils/utils";
import styles from "./style.module.css";

interface IProps {
  item: IProduct;
  link: string;
  onAdd: (item: IProduct) => void;
}

const ProductCard: React.FC<IProps> = ({item, link, onAdd}) => {

  const callbacks = {
    onAdd: () => onAdd(item),
  }

  return (
    <div className={styles.card}>
      <div className={styles.start}>
        <div className={styles.image}>
          <img src={item.image} alt=""/>
        </div>
        <div className={styles.title}>
          <Link to={link}>{item.title}</Link>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.price}>${numberFormat(Number(item.price))}</div>
        <button onClick={callbacks.onAdd}>Add</button>
      </div>
    </div>
  )
}

export default memo(ProductCard);