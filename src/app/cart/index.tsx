import {memo, useCallback} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {close} from "../../store/reducers/modals";
import {removeFromCart} from "../../store/reducers/cart";
import {IProduct} from "../../types/i-product";
import ModalLayout from "../../components/modal-layout";
import List from "../../components/list";
import ProductBasket from "../../components/product-basket";
import BasketTotal from "../../components/basket-total";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const {list, sum} = useAppSelector(state => state.cart);

  const callbacks = {
    // Удаление из корзины
    removeFromBasket: useCallback((item: IProduct) => dispatch(removeFromCart(item)), []),
    // Закрытие любой модалки
    closeModal: useCallback(() => dispatch(close()), []),
  }

  const renders = {
    item: useCallback((item: IProduct) => {
      return <ProductBasket item={item} link={`/product/${item.id}`} onRemove={callbacks.removeFromBasket}/>
    }, [])
  }

  return (
    <ModalLayout title="Cart" onClose={callbacks.closeModal}>
      <List list={list} renderItems={renders.item}/>
      <BasketTotal sum={sum}/>
    </ModalLayout>
  )
}

export default memo(Cart);