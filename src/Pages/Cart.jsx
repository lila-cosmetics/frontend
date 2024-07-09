import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Label, Select, Button } from "flowbite-react";

import { FaTrashAlt } from "react-icons/fa";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../slices/cartSlice";

/* we have our items in our local storage and redux state so with useSelector we get items*/

/* <FaTrashAlt /> */
function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty })); //we passed in eintire product item
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id)); // here we just passed in the id of product
  };

  const checkOutHandler = ()=> {
    //if it is logged in redirect to shipping page
    navigate('/login?redirect=/shipping')
  }

  return (
    <>
      <div>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is empty{" "}
            <Link to="/" className="underline">
              Go Back
            </Link>{" "}
          </Message>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-6 w-2/3 mx-auto items-center"
              >
                <img src={item.image} alt={item.name} className="w-48" />
                <div className="col-span-3">
                  <Link
                    to={`/products/${item._id}`}
                    className="text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                  <div className="text-gray-700">{item.price} €</div>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  {item.availableQuantity > 0 && (
                    <div>
                      <Label
                        htmlFor={`countInStock-${item._id}`}
                        value="Qty"
                        className="sr-only"
                      />
                      <Select
                        id={`countInStock-${item._id}`}
                        required
                        defaultValue={1}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                        className="w-20"
                      >
                        {[
                          ...Array(Math.min(item.availableQuantity, 10)).keys(),
                        ].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Select>
                    </div>
                  )}
                  <Button
                    outline
                    gradientDuoTone="purpleToPink"
                    onClick={() => removeFromCartHandler(item._id)}
                  >
                    <FaTrashAlt size={20} />
                  </Button>
                </div>
                <div>
                  <h2>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h2>
                  €{" "}
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </div>
                <div>
                  <Button disabled={cartItems.length === 0} color="purple" pill
                  onClick={checkOutHandler}>
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
