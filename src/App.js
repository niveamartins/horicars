import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Cars } from "./pages/Cars/Cars";
import { Home } from "./pages/Home/Home";
import { RegisterCar } from "./pages/RegisterCar/RegisterCar";
import { RegisterCategory } from "./pages/RegisterCategory/RegisterCategory";
import { RegisterProducer } from "./pages/RegisterProducer/RegisterProducer";
import "./App.css"

function App() {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/carros" exact element={<Cars />} />
          <Route path="/registrar-carro" exact element={<RegisterCar />} />
          <Route path="/registrar-categoria" exact element={<RegisterCategory />} />
          <Route path="/registrar-fabricante" exact element={<RegisterProducer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
