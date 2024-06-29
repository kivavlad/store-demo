import {memo} from "react";
import {numberFormat} from "../../utils/utils";
import styles from "./style.module.css";

interface IProps {
  sum: number;
}

const BasketTotal: React.FC<IProps> = ({sum}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.cell}>Total:</span>
      <span className={styles.cell}> {numberFormat(sum)}$</span>
      <span className={styles.cell}></span>
    </div>
  )
}

export default memo(BasketTotal);