import {memo, useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {createProduct} from "../../store/reducers/products";
import {generateCode} from "../../utils/utils";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import Form from "../../components/form";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Select from "../../components/select";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {list} = useAppSelector(state => state.categories);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const callbacks = {
    onCreate: useCallback(() => {
      if (title.trim() && description.trim() && price.trim() && category.trim() && image.trim()) {
        dispatch(createProduct({
          id: generateCode(), 
          title, 
          description, 
          price, category, 
          image
        }))
        setTitle('');
        setDescription('');
        setPrice('');
        setCategory('');
        setImage('');
        navigate('/new-products');
      }
    }, [title, description, price, category, image])
  }

  return (
    <PageLayout>
      <Head title="Create new product"/>
      <Navigation/>
      <Form onSubmit={callbacks.onCreate}>
        <Input label="Title" type='text' placeholder="Enter title" value={title} setValue={setTitle}/>
        <Textarea label="Description" placeholder="Enter description" value={description} setValue={setDescription}/>
        <Input label="Image url" type='text' placeholder="Enter image url" value={image} setValue={setImage}/>
        <Select label="Category" value={category} setValue={setCategory} options={list}/>
        <Input label="Price" type='text' placeholder="Enter price" value={price} setValue={setPrice}/>
      </Form>
    </PageLayout>
  )
}

export default memo(Create);