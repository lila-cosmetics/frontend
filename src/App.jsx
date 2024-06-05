import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
/* import UserProvider from "@provider/UserProvider";
import ProtectRoutes from "@auth/protectedRoutes/ProtectedRoutes"; */
import Login from "../src/Pages/Login";
import RootLayout from './layouts/RootLayout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Home/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<Login/>} />
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

    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
