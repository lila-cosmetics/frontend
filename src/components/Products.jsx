import products from '../../products'


function Products() {
  return (
    <>
      <div className='flex flex-wrap justify-center mx-auto w-2/3 gap-5 mt-20 mb-36'>
        {products.map((product)=>(
          <div key={product._id} className='border p-3'>
            <img src={product.image} style={{width:'300px', height:'350px'}} alt="" />
            <h3>{product.name}</h3>
          </div>
        ))}

      </div>
    </>
  )
}

export default Products