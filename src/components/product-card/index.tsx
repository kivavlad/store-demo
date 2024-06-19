import {memo} from "react";
import {Link} from "react-router-dom";
import {IProduct} from "../../types/i-product";
import styles from "./style.module.css";

interface IProps {
  item: IProduct;
  link: string;
}

const ProductCard: React.FC<IProps> = ({item, link}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={item.image} alt=""/>
      </div>
      <div className={styles.text}>
        <Link to={link} className={styles.title}>{item.title}</Link>
        <div className={styles.price}>${item.price}</div>
      </div>
    </div>
  )
}

export default memo(ProductCard);