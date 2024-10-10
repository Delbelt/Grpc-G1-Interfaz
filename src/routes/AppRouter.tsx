import Home from "components/Home";
import Login from "components/Login";
import HomeProvider from "pages/HomeProvider";
import NewPage from "pages/NewPage";
import Order from "pages/Order";
import OrderClient from "pages/OrderClient";
import OrderClientDetails from "pages/OrderClient/components/OrderClientDetails";
import OrderCreate from "pages/OrderCreate";
import ProductPage from "pages/ProductPage";
import AddProduct from "pages/ProductPage/components/AddProduct";
import ViewProduct from "pages/ProductPage/components/ViewProduct";
import ProductProvider from "pages/ProductProvider";
import StockPage from "pages/StockPage";
import AddStock from "pages/StockPage/components/AddStock";
import ViewStock from "pages/StockPage/components/ViewStock";
import StorePage from "pages/StorePage";
import AddStore from "pages/StorePage/components/AddStore";
import ViewStore from "pages/StorePage/components/ViewStore";
import UserPage from "pages/UserPage";
import AddUser from "pages/UserPage/components/AddUser";
import ViewUser from "pages/UserPage/components/ViewUser";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const getToken = () => localStorage.getItem("token");

interface RouteProps {
  element: JSX.Element;
}

const PrivateRoute = ({ element }: RouteProps) => {
  const token = getToken();

  return token ? element : <Navigate to='/' />;
};

const PublicRoute = ({ element }: RouteProps) => {
  const token = getToken();

  return token ? <Navigate to='/dashboard' /> : element;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path='/' element={<PublicRoute element={<Login />} />} />

        {/* RUTAS PROVEEDOR */}
        <Route path='/provider' element={<PrivateRoute element={<HomeProvider />} />} />
        <Route path='/provider/Products' element={<PrivateRoute element={<ProductProvider />} />} />
        <Route path='/provider/purchase-order' element={<PrivateRoute element={<Order />} />} />

        {/* RUTAS PRIVADAS */}
        <Route path='/dashboard' element={<PrivateRoute element={<Home />} />} />

        <Route path='/dashboard/news' element={<PrivateRoute element={<NewPage />} />} />

        <Route path='/dashboard/orders' element={<PrivateRoute element={<OrderClient />} />} />
        <Route
          path='/dashboard/orders/new-order'
          element={<PrivateRoute element={<OrderCreate />} />}
        />
        <Route
          path='/dashboard/orders/:id'
          element={<PrivateRoute element={<OrderClientDetails />} />}
        />

        <Route path='/dashboard/Stores' element={<PrivateRoute element={<StorePage />} />} />
        <Route path='/dashboard/Stores/:id' element={<PrivateRoute element={<ViewStore />} />} />
        <Route path='/dashboard/Stores/create' element={<PrivateRoute element={<AddStore />} />} />

        <Route path='/dashboard/Products' element={<PrivateRoute element={<ProductPage />} />} />
        <Route
          path='/dashboard/Products/:id'
          element={<PrivateRoute element={<ViewProduct />} />}
        />
        <Route
          path='/dashboard/Products/create'
          element={<PrivateRoute element={<AddProduct />} />}
        />

        <Route path='/dashboard/Stocks' element={<PrivateRoute element={<StockPage />} />} />
        <Route path='/dashboard/Stocks/:id' element={<PrivateRoute element={<ViewStock />} />} />
        <Route path='/dashboard/Stocks/create' element={<PrivateRoute element={<AddStock />} />} />

        <Route path='/dashboard/Users' element={<PrivateRoute element={<UserPage />} />} />
        <Route path='/dashboard/Users/:id' element={<PrivateRoute element={<ViewUser />} />} />
        <Route path='/dashboard/Users/create' element={<PrivateRoute element={<AddUser />} />} />

        <Route path='*' element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
