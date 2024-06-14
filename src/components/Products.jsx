import { Link } from 'react-router-dom';
import { Rating } from "flowbite-react";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products/getAllProducts');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='flex flex-wrap justify-center mx-auto w-2/3 gap-5 mt-20 mb-36'>
      {products.map((product) => {
        // Check if the price needs conversion
        let price = product.price;
        if (typeof price === 'object' && price.$numberDecimal) {
          price = parseFloat(price.$numberDecimal).toFixed(2);
        }

        return (
          <div key={product._id} className='border p-3'>
            <Link to={`/products/${product._id}`} >
              <img src={product.image} style={{width:'300px', height:'350px'}} alt={product.name} />
              <h3>{product.name}</h3>
              <span>{price} €</span>
              <Rating></Rating>
            </Link>
          </div>
        );
      })}
    </div> 
  );
}

export default Products;
