import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";

const Shop = () => {
  return <p>SHOP</p>;
};

const Nav = () => {
  return (
    <div>
      <p>NAVIGATION</p>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="shop" element={<Shop />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
