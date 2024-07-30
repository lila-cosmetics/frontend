import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
/* import UserProvider from "@provider/UserProvider";
import ProtectRoutes from "@auth/protectedRoutes/ProtectedRoutes"; */
import Login from "../src/Pages/Login";
import Register from "./Pages/Register";
import RootLayout from "./layouts/RootLayout";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductItem from "./components/ProductItem";
import Shipping from "./Pages/Shipping";
import ProtectRoutes from "./components/auth/protectedRoutes/ProtectedRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products/:id" element={<ProductItem />} />
      <Route path="" element={<ProtectRoutes />}>
        <Route path="/shipping" element={<Shipping />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    /* <UserProvider> */
    /*       <Routes> */
    /* Unprotect routes */
    /* <Route path="/login" element={<Login />} />  */
    /*       <Route path="/register" element={<RegisterationPage />} />  */

    /* Protect Routes */
    /*    <Route element={<ProtectRoutes />} />  */
    /*       Call all the protected components here*/
    /*      </Routes> */
    /*     </UserProvider>  */

    <div className="app-container">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
