// Products.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'flowbite-react';
import Loader from '../components/Loader'
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productApiSlice'; // Correct import

function Products() {
  const { data: products, isLoading, error } = useGetProductsQuery(); // Correct usage
  console.log('products:', products, 'isLoading:', isLoading, 'error:', error);
  return (
    <>

      {isLoading ? (
 <Loader/>
      ) : error ? (
        <Message color='failure'>{error?.data?.message || error.error}</Message>
      ) : (
        <div className='flex flex-wrap justify-center mx-auto w-full gap-5 mt-20 mb-36'>
          {products.map((product) => {
            let price = product.price;
            if (typeof price === 'object' && price.$numberDecimal) {
              price = parseFloat(price.$numberDecimal).toFixed(2);
            }

            return (
              <div key={product._id} className='border p-3'>
                <Link to={`/products/${product._id}`}>
                  <img src={product.image} style={{ width: '300px', height: '350px' }} alt={product.name} />
                  <h3>{product.name}</h3>
                  <span>{price} €</span>
                  <Rating />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Products;



{/* <div className='flex flex-wrap justify-center mx-auto w-full gap-5 mt-20 mb-36'>
{products.map((product) => {
  let price = product.price;
  if (typeof price === 'object' && price.$numberDecimal) {
    price = parseFloat(price.$numberDecimal).toFixed(2);
  }


    <div key={product._id} className='border p-3'>
      <Link to={`/products/${product._id}`}>
        <img src={product.image} style={{ width: '300px', height: '350px' }} alt={product.name} />
        <h3>{product.name}</h3>
        <span>{price} €</span>
   
      </Link>
    </div>
  
})}
</div> */}