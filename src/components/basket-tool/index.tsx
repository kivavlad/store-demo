import {memo} from "react";
import {numberFormat, plural} from "../../utils/utils";
import styles from "./style.module.css";

interface IProps {
  amount: number;
  sum: number;
  onOpen: () => void;
}

const BasketTool: React.FC<IProps> = ({amount, sum, onOpen}) => {
  const variants = {one: "product", other: "products"};

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>In cart:</span>
      <span className={styles.total}>
        {amount
          ? `${amount} ${plural(amount, variants)} / ${numberFormat(sum)} $`
          : 'empty'
        }
      </span>
      <button onClick={onOpen}>Open</button>
    </div>
  )
}

export default memo(BasketTool);