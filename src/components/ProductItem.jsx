import { Label, Select } from "flowbite-react";
import { useParams, Link ,useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Message from "./Message";
import { useGetProductDetailsQuery } from "../slices/productApiSlice";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";

function ProductItem() {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addToCartHandler=()=>{
    //we need addtocart action from cartslice and then dispatch addtocart action
    dispatch(addToCart({...products, qty}))
    navigate('/cart')
  }
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);
  console.log("products:", products, "isLoading:", isLoading, "error:", error);
  console.log("Product ID:", productId);
  console.log("API Endpoint:", `/api/products/${productId}`);

  return (
    <div className="flex flex-col gap-5 mt-20 ml-48 mb-52">
      <div>
        <Link to="/" className="border p-3 bg-slate-100">
          Go Back
        </Link>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message>{error?.data?.message || error.error}</Message>
      ) : (
        <div className="flex gap-10">
          <img
            src={products.image}
            alt={products.name}
            style={{ width: "400px", height: "600px" }}
          />
          <div className="flex flex-col gap-10">
            <h2>{products.name}</h2>
            <p>{products.description}</p>

            {products.availableQuantity > 0 ?(
              <div className="w-1/3">
                <Label
                  htmlFor="countInStock"
                  value="Select the number of product"
           
                />
                <Select id="countInStock" required
                       defaultValue={1}
                       onChange={(e)=>setQty(Number(e.target.value))}>
                  {/* show maximum 10 count is stock
                If products.availableQuantity is less than 10, it uses products.availableQuantity. Otherwise, it uses 10. */}
                  {[
                    ...Array(Math.min(products.availableQuantity, 10)).keys(),
                  ].map((x) => (
                    <option key={x +1} value={x + 1}>{x + 1}</option>
                  ))}
                </Select>
              </div>
            ):(
              <p>Out of stock</p>
            )}

            <span>{products.price} €</span>
            <div>
              <button className="border p-3 bg-slate-100" onClick={addToCartHandler}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
