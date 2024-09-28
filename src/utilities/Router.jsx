import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import EnterLoginCode from "../pages/EnterLoginCode";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/enterLoginCode" element={<EnterLoginCode />} />
    </Routes>
  );
};

export default Router;
