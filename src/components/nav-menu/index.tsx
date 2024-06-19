import {memo} from "react";
import {NavLink} from "react-router-dom";
import styles from "./styles.module.css";
import "./nav-style.css";

const NavMenu: React.FC = () => {
  return (
    <div className={styles.nav}>
      <NavLink to="/" className={styles.link}>Home</NavLink>
      <NavLink to="/new-products" className={styles.link}>New Products</NavLink>
      <NavLink to="/create" className={styles.link}>Create</NavLink>
    </div>
  )
}

export default memo(NavMenu);