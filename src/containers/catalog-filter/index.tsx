import {memo, useCallback, useEffect} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {loadCategories} from "../../store/reducers/categories";
import {setCategory} from "../../store/reducers/products";
import CategoriesLayout from "../../components/categories-layout";
import Select from "../../components/select";

const CatalogFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, [])

  const {list} = useAppSelector(state => state.categories);
  const {param} = useAppSelector(state => state.products);

  const callbacks = {
    // Филитрация
    onFilter: useCallback((sort: string) => dispatch(setCategory(sort)), []),
  }

  return (
    <CategoriesLayout>
      <Select options={list} value={param.category} setValue={callbacks.onFilter}/>
    </CategoriesLayout>
  )
}

export default memo(CatalogFilter);