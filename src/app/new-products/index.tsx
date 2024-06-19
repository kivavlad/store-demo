import {memo, useCallback} from "react";
import {useAppSelector} from "../../hooks/use-selector";
import {IProduct} from "../../types/i-product";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import List from "../../components/list";
import ProductCard from "../../components/product-card";

const NewProducts: React.FC = () => {
  const {new_products} = useAppSelector(state => state.products);

  const renders = {
    item: useCallback((item: IProduct) => {
      return <ProductCard key={item.id} item={item} link={`/new-product/${item.id}`}/>
    }, [])
  }

  return (
    <PageLayout>
      <Head title="Store"/>
      <Navigation/>
      <List list={new_products} renderItems={renders.item}/>
    </PageLayout>
  )
}

export default memo(NewProducts);