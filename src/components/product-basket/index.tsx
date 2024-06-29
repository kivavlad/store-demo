import {memo} from "react";
import {Link} from "react-router-dom";
import {numberFormat} from "../../utils/utils";
import {IProduct} from "../../types/i-product";
import styles from "./style.module.css";

interface IProps {
  item: IProduct;
  link: string;
  onRemove: (item: IProduct) => void;
}

const ProductBasket: React.FC<IProps> = ({item, link, onRemove}) => {

  const callbacks = {
    onRemove: () => onRemove(item),
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
        <div className={styles.cell}>${numberFormat(Number(item.price))}</div>
        <div className={styles.cell}>{numberFormat(Number(item.amount)) || 0} pcs.</div>
        <button onClick={callbacks.onRemove}>Remove</button>
      </div>
    </div>
  )
}

export default memo(ProductBasket);