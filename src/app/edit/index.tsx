import {memo, useCallback, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {editProduct} from "../../store/reducers/products";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import Form from "../../components/form";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Select from "../../components/select";

const Edit: React.FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {list} = useAppSelector(state => state.categories);
  const {new_products} = useAppSelector(state => state.products);
  const currentProduct = new_products.find((item) => item.id === Number(id));

  const [title, setTitle] = useState<string>(currentProduct?.title || '');
  const [description, setDescription] = useState<string>(currentProduct?.description || '');
  const [price, setPrice] = useState<string>(currentProduct?.price || '');
  const [category, setCategory] = useState<string>(currentProduct?.category || '');
  const [image, setImage] = useState<string>(currentProduct?.image || '');

  const callbacks = {
    onEdit: useCallback(() => {
      if (title.trim() && description.trim() && price.trim() && category.trim() && image.trim()) {
        dispatch(editProduct({
          id: Number(id), 
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
      <Head title="Edit product"/>
      <Navigation/>
      <Form onSubmit={callbacks.onEdit}>
        <Input label="Title" type='text' placeholder="Enter title" value={title} setValue={setTitle}/>
        <Textarea label="Description" placeholder="Enter description" value={description} setValue={setDescription}/>
        <Input label="Image url" type='text' placeholder="Enter image url" value={image} setValue={setImage}/>
        <Select label="Category" value={category} setValue={setCategory} options={list}/>
        <Input label="Price" type='text' placeholder="Enter price" value={price} setValue={setPrice}/>
      </Form>
    </PageLayout>
  )
}

export default memo(Edit);