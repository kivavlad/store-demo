import {memo} from "react";
import {Link} from "react-router-dom";
import styles from "./styles.module.css";

const NavMenu: React.FC = () => {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.link}>Home</Link>
    </div>
  )
}

export default memo(NavMenu);