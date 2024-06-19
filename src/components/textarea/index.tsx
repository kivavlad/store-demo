import {memo} from "react";
import styles from "./style.module.css";

interface IProps {
  label?: string;
  placeholder?: string;
  value: string;
  setValue: (param: string) => void;
}

const Textarea: React.FC<IProps> = ({label, placeholder, value, setValue}) => {
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}

      <textarea 
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default memo(Textarea);