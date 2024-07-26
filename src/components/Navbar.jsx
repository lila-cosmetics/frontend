import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; //for selecting from global state
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useLoginMutation } from "../slices/usersApiSlice";
import {logout} from '../slices/authSlice'
import { Badge, Dropdown } from "flowbite-react";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log("this is the selected products", cartItems);


  const {userInfo} = useSelector((state)=> state.auth)
  console.log(userInfo)

  const totalItems= cartItems.reduce((a, c) => a + c.qty, 0)
  console.log(totalItems)

  const dispatch= useDispatch()
  const navigate= useNavigate()

  const [logoutApiCall]= useLoginMutation()
  const logoutHandler= async()=>{
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }
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
{userInfo ? (
  <Dropdown label={`welcome ${userInfo.email}`} style={{backgroundColor:'#CABFFD', color:'#424242', border:'none'}}>
    <Dropdown.Item as={Link} to="/profile" className="text-gray-600 hover:bg-gray-200">Profile</Dropdown.Item>
    <Dropdown.Item as={Link} to="/login" onClick={logoutHandler} className="text-gray-600 hover:bg-gray-200">Log out</Dropdown.Item>
  </Dropdown>
) : (<Link to="/login" className="flex items-center gap-1">
            {" "}
            <MdOutlineAccountCircle size={24} />
            Login
          </Link>)}
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
