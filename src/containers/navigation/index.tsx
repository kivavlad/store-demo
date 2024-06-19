import {memo, useEffect, useCallback} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {loadCategories} from "../../store/reducers/categories";
import {setCategory} from "../../store/reducers/products";
import NavMenu from "../../components/nav-menu";
import Select from "../../components/select";
import styles from "./style.module.css";

const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const {param} = useAppSelector(state => state.products);
  const {list} = useAppSelector(state => state.categories);

  useEffect(() => {
    dispatch(loadCategories());
  }, [])

  const callbacks = {
    setValue: useCallback((value: string) => dispatch(setCategory(value)), []),
  }

  return (
    <div className={styles.wrapper}>
      <NavMenu/>
      <Select value={param.category} setValue={callbacks.setValue} options={list}/>
    </div>
  )
}

export default memo(Navigation);