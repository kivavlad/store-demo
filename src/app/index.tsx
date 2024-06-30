import {Routes, Route} from "react-router-dom";
import {useAppSelector} from "../hooks/use-selector";
import Main from "./main";
import Details from "./details";
import Cart from "./cart";

const App: React.FC = () => {
  const {activeModal} = useAppSelector(state => state.modals);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product/:id" element={<Details/>}/>
      </Routes>

      {activeModal === 'cart' && <Cart/>}
    </>
  )
}

export default App;