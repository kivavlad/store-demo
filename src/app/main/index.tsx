import {memo, useCallback, useEffect} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {load} from "../../store/reducers/products";
import {IProduct} from "../../types/i-product";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import Loader from "../../components/loader";
import List from "../../components/list";
import ProductCard from "../../components/product-card";
import Controls from "../../components/controls";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const {list, param, waiting} = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(load({
      limit: param.limit, 
      category: param.category && `category/${param.category}`
    }));
  }, [param.limit, param.category])

  const renders = {
    item: useCallback((item: IProduct) => {
      return <ProductCard key={item.id} item={item} link={`/product/${item.id}`}/>
    }, [])
  }

  return (
    <PageLayout>
      <Head title="Store"/>
      <Navigation/>
      <Loader active={waiting}>
        <List list={list} renderItems={renders.item}/>
      </Loader>
      <Controls/>
    </PageLayout>
  )
}

export default memo(Main);