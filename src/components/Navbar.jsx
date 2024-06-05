import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="flex justify-between bg-slate-100 p-10">
          <Link to="/">Home</Link>
          <div className=" flex gap-10" >
              <Link to="/cart">Cart</Link>
              <Link to="/login">Login</Link>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
