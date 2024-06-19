import {memo} from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/use-selector";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import DetailsCard from "../../components/details-card";

const NewProductDetails: React.FC = () => {
  const {id} = useParams();
  const {new_products} = useAppSelector(state => state.products);
  const currentProduct = new_products.find((item) => item.id === Number(id));
  
  return (
    <PageLayout>
      <Head title={currentProduct?.title}/>
      <Navigation/>
      <DetailsCard product={currentProduct} link={`/edit/${currentProduct?.id}`}/>
    </PageLayout>
  )
}

export default memo(NewProductDetails);