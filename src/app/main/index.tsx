import {memo, useEffect} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {load} from "../../store/reducers/products";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import CatalogList from "../../containers/catalog-list";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const {param} = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(load({
      limit: param.limit, 
      category: param.category && `category/${param.category}`
    }));
  }, [param.limit, param.category])

  return (
    <PageLayout>
      <Head title="Store"/>
      <Navigation/>
      <CatalogList/>
    </PageLayout>
  )
}

export default memo(Main);