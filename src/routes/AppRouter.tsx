import Home from "components/Home";
import Login from "components/Login";
import ProductPage from "pages/ProductPage";
import ViewProduct from "pages/ProductPage/components/ViewProduct";
import StockPage from "pages/StockPage";
import ViewStock from "pages/StockPage/components/ViewStock";
import StorePage from "pages/StorePage";
import ViewStore from "pages/StorePage/components/ViewStore";
import UserPage from "pages/UserPage";
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

        {/* RUTAS PRIVADAS */}
        <Route path='/dashboard' element={<PrivateRoute element={<Home />} />} />

        <Route path='/dashboard/Stores' element={<PrivateRoute element={<StorePage />} />} />
        <Route path='/dashboard/Stores/:id' element={<PrivateRoute element={<ViewStore />} />} />

        <Route path='/dashboard/Products' element={<PrivateRoute element={<ProductPage />} />} />
        <Route
          path='/dashboard/Products/:id'
          element={<PrivateRoute element={<ViewProduct />} />}
        />

        <Route path='/dashboard/Stocks' element={<PrivateRoute element={<StockPage />} />} />
        <Route path='/dashboard/Stocks/:id' element={<PrivateRoute element={<ViewStock />} />} />

        <Route path='/dashboard/Users' element={<PrivateRoute element={<UserPage />} />} />
        <Route path='/dashboard/Users/:id' element={<PrivateRoute element={<ViewUser />} />} />

        <Route path='*' element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
