import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "./Message";
import { useGetProductDetailsQuery } from "../slices/productApiSlice";

function ProductItem() {
  const { id: productId } = useParams();
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);
  console.log('products:', products, 'isLoading:', isLoading, 'error:', error);
  console.log('Product ID:', productId);
  console.log('API Endpoint:', `/api/products/${productId}`);
  
  return (
    <div className="flex flex-col gap-5 mt-20 ml-48 mb-52">
      <div>
        <Link to="/" className="border p-3 bg-slate-100">
          Go Back
        </Link>
      </div>


      {isLoading ? (
        <Loader/>
      ): error ? (
        <Message>{error?.data?.message || error.error}</Message>
      ) : ( <div className="flex gap-10">
        <img
          src={products.image}
          alt={products.name}
          style={{ width: "400px", height: "600px" }}
        />
        <div className="flex flex-col gap-10">
          <h2>{products.name}</h2>
          <p>{products.description}</p>

          <span>{products.price} €</span>
          <div>
            <button className="border p-3 bg-slate-100">Add to Cart</button>
          </div>
        </div>
      </div>)}
     
    </div>
  );
}

export default ProductItem;
