import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <Products />
        </section>
      </main>
      <section>
        <Outlet />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
