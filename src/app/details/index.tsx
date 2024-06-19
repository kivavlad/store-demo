import {memo, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {loadDetails} from "../../store/reducers/details";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import DetailsCard from "../../components/details-card";
import Loader from "../../components/loader";

const Details: React.FC = () => {
  const dispatch = useAppDispatch();
  const {result, waiting} = useAppSelector(state => state.details);
  const {id} = useParams();

  useEffect(() => {
    dispatch(loadDetails(id))
  }, [id])
  
  return (
    <PageLayout>
      <Head title={result.title}/>
      <Navigation/>
      <Loader active={waiting}>
        <DetailsCard product={result}/>
      </Loader>
    </PageLayout>
  )
}

export default memo(Details);