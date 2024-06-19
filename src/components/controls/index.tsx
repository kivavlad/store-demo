import {memo} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {setLimit} from "../../store/reducers/products";
import styles from "./style.module.css";

const Controls: React.FC = () => {
  const dispatch = useAppDispatch();

  const callbacks = {
    getEightProducts: () => dispatch(setLimit(8)),
    getSixteenProducts: () => dispatch(setLimit(16)),
    getAllProducts: () => dispatch(setLimit(30)),
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <button type='button' onClick={callbacks.getEightProducts}>
          8 products
        </button>
        <button type='button' onClick={callbacks.getSixteenProducts}>
          16 products
        </button>
        <button type='button' onClick={callbacks.getAllProducts}>
          all products
        </button>
      </div>
    </div>
  )
}

export default memo(Controls);