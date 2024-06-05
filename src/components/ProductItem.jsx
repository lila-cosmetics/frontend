import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../../products";

function ProductItem() {
  const { id: productId } = useParams();
  console.log("Products:", products);
  console.log("ProductId:", productId);

  const product = products.find((p) => p._id === Number(productId));
  console.log("Product:", product);



  return (
    <div className=" flex flex-col gap-5 mt-20 ml-48 mb-52" >
     
      <div>
        <Link to='/' className="border p-3 bg-slate-100">Go Back</Link>
      </div>
         <div className="flex gap-10">
           <img src={product.image} alt="" style={{width:'400px', height:'600px'}} />
                   <div className="flex flex-col gap-10">
                     <h2>{product.name}</h2>
                     <p> {product.description}</p>
                     <p className="w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quas rem nemo! Obcaecati tempore necessitatibus maxime aut, sint pariatur animi, ducimus tenetur cupiditate et laborum. Quam aliquam ad libero!</p>
                    <span> {product.price} € </span>
                   <div className=""><button className="border p-3 bg-slate-100">Add to Cart </button></div>
                   </div>
         </div>


    </div>
  );
}



export default ProductItem;
