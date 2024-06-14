import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Rating from "../components/Rating";

function RootLayout() {
  const location = useLocation();
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <Outlet />
        </section>

        {/* conditionally rendering the product component 
        if we are in the root, render all products */}
        {location.pathname === "/" && (
          <section>
            <Products />
          </section>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
