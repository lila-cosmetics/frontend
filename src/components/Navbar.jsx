import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; //for selecting from global state
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Badge } from "flowbite-react";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log("this is the selected products", cartItems);
  const totalItems= cartItems.reduce((a, c) => a + c.qty, 0)
  console.log(totalItems)
  return (
    <nav>
      <div className="flex justify-between bg-slate-100 p-10 text-xl">
        <Link to="/">Home</Link>
        <div className=" flex gap-10">
          <Link to="/cart" className="flex items-center gap-1 ">
            {" "}
            <FiShoppingCart size={24} />
            Cart{" "}
            {cartItems.length > 0 && (
              <Badge
                color="purple"
                size="md"
                className="bg-purple-300 rounded-lg"
              >
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </Badge>
            )}
          </Link>

          <Link to="/login" className="flex items-center gap-1">
            {" "}
            <MdOutlineAccountCircle size={24} />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
