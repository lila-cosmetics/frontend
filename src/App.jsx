import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserProvider from "@provider/UserProvider";
import ProtectRoutes from "@auth/protectedRoutes/ProtectedRoutes";
import RegisterationPage from "@pages/registerationPage/RegisterationPage";
import Login from "../src/Pages/Login";

function App() {
  return (
    <UserProvider>
      <Routes>
        {/* Unprotect routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterationPage />} />

        {/* Protect Routes */}
        <Route element={<ProtectRoutes />} />
        {/* Call all the protected components here */}
      </Routes>
    </UserProvider>
  );
}

export default App;
