import {memo, useCallback, useEffect, useRef} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {IProduct} from "../../types/i-product";
import {addInCart} from "../../store/reducers/cart";
import {setLimit} from "../../store/reducers/products";
import Loader from "../../components/loader";
import List from "../../components/list";
import ProductCard from "../../components/product-card";

const CatalogList: React.FC = () => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<any>();
  const {list, waiting, param} = useAppSelector(state => state.products);

  const callbacks = {
    // Добавление в корзину
    onAdd: useCallback((item: IProduct) => dispatch(addInCart(item)), []),
  }

  const renders = {
    item: useCallback((item: IProduct) => {
      return <ProductCard item={item} link={`/product/${item.id}`} onAdd={callbacks.onAdd}/>
    }, [])
  }

  // Функция вычисления нижней границы окна для бесконечной подгрузки
  function scrollHandler() {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const bottom = Math.floor(documentHeight - (windowHeight + scrollTop));
    
    if (bottom < 0) {
      dispatch(setLimit(param.limit + 10));
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return function() {
        window.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  return (
    <div ref={containerRef}>
      <Loader active={waiting}>
        <List list={list} renderItems={renders.item}/>
      </Loader>
    </div>
  )
}

export default memo(CatalogList);