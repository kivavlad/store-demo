import {memo} from "react";
import styles from "./style.module.css";

interface IProps {
  label?: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  setValue: (param: string) => void;
}

const Input: React.FC<IProps> = ({label, type, placeholder, value, setValue}) => {
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}

      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default memo(Input);