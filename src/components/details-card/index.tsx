import {memo} from "react";
import {Link} from "react-router-dom";
import {IProduct} from "../../types/i-product";
import styles from "./style.module.css";

interface IProps {
  product: IProduct | undefined;
  link?: string; 
}

const DetailsCard: React.FC<IProps> = ({product, link}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        {product && <img src={product.image} alt=""/>}
      </div>
      <div className={styles.text_wrapper}>
        <div className={styles.text}>
          <span>Description:</span> 
          {product && <>{product.description}</>}
        </div>
        <div className={styles.text}>
          <span>Category:</span> 
          {product && <>{product.category}</>}
        </div>
        <div className={styles.price}>
          <span>Price:</span> 
          {product && <>${product.price}</>}
        </div>
        {link && 
          <Link to={link}>Edit</Link>
        }
      </div>
    </div>
  )
}

export default memo(DetailsCard);