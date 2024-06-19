import {memo} from "react";
import {ICategory} from "../../types/i-category";
import styles from "./style.module.css";

interface IProps {
  label?: string;
  value: string;
  setValue: (param: string) => void;
  options: ICategory[];
}

const Select: React.FC<IProps> = ({label, value, setValue, options}) => {
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}

      <select className={styles.select} value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((item, index) => (
          <option key={index} value={item.value}>{item.title}</option>
        ))}
      </select>
    </div>
  )
}

export default memo(Select);