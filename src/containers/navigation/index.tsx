import {memo, useCallback} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {open} from "../../store/reducers/modals";
import SideLayout from "../../components/side-layout";
import NavMenu from "../../components/nav-menu";
import BasketTool from "../../components/basket-tool";

const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const {amount, sum} = useAppSelector(state => state.cart);

  const callbacks = {
    onOpen: useCallback(() => dispatch(open('cart')), [])
  }
  
  return (
    <SideLayout>
      <NavMenu/>
      <BasketTool amount={amount} sum={sum} onOpen={callbacks.onOpen}/>
    </SideLayout>
  )
}

export default memo(Navigation);