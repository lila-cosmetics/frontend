import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductItem() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Fetching product with ID:", productId);
        const { data } = await axios.get(
          `http://localhost:3001/api/products/getProductById/${productId}`
        );
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex flex-col gap-5 mt-20 ml-48 mb-52">
      <div>
        <Link to="/" className="border p-3 bg-slate-100">
          Go Back
        </Link>
      </div>
      <div className="flex gap-10">
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "400px", height: "600px" }}
        />
        <div className="flex flex-col gap-10">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        
          <span>{product.price} €</span>
          <div>
            <button className="border p-3 bg-slate-100">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
