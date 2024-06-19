import {Routes, Route} from "react-router-dom";
import Main from "./main";
import NewProducts from "./new-products";
import Details from "./details";
import NewProductDetails from "./newproduct-details";
import Create from "./create";
import Edit from "./edit";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/new-products" element={<NewProducts/>}/>
      <Route path="/product/:id" element={<Details/>}/>
      <Route path="/new-product/:id" element={<NewProductDetails/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
  )
}

export default App;