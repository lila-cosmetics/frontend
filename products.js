import img1 from '../src/assets/images/lipstick.jpg'
import img2 from './assets/images/lipstickset.jpg'
import img3 from './assets/images/eyeshadow1.jpg'
import img4 from './assets/images/antiage.jpg'
import img5 from './assets/images/shampoo.jpg'
import img6 from './assets/images/shampoo2.jpg'
import img7 from './assets/images/brushset.jpg'
import img8 from './assets/images/moisturizingcream.jpg'


const products = [
    {
      _id: 1,
      name: "Moisturizing Cream",
      price: 19.99,
      type: "skin",
      availableQuantity: 100,
      image: img8,
      status: "Available",
      description: "Keep your skin hydrated with our moisturizing cream.",
      tags: ["moisturizer", "skincare"],
      rating:4.0,
      numReviews:8,
    },
    {
      _id: 2,
      name: "Anti-Aging Serum",
      price: 29.99,
      type: "skin",
      availableQuantity: 50,
      image: img4,
      status: "Available",
      description: "Reduce the appearance of wrinkles with our anti-aging serum.",
      tags: ["anti-aging", "skincare"],
      rating:3.0,
      numReviews:2,
    },
    {
      _id: 3,
      name: "Shampoo for Dry Hair",
      price: 12.99,
      type: "hair",
      availableQuantity: 80,
      image: img5,
      status: "Available",
      description: "Restore moisture to your hair with our shampoo for dry hair.",
      tags: ["shampoo", "haircare"],
      rating:4.5,
      numReviews:20,
    },
    {
      _id: 4,
      name: "Hair Growth Oil",
      price: 24.99,
      type: "hair",
      availableQuantity: 60,
      image: img1,
      status: "Available",
      description: "Promote hair growth and strengthen your hair with our hair growth oil.",
      tags: ["haircare", "hair growth"],
      rating:3.7,
      numReviews:5,
    },
    {
      _id: 5,
      name: "Lipstick Set",
      price: 15.99,
      type: "beauty",
      availableQuantity: 120,
      image: img2,
      status: "Available",
      description: "Complete your makeup look with our lipstick set.",
      tags: ["makeup", "beauty"],
      rating:3.5,
      numReviews:6,
    },
    {
      _id: 6,
      name: "brush set",
      price: 25.99,
      type: "beauty",
      availableQuantity: 90,
      image: img7,
      status: "Available",
      description: "Create stunning make up with our brush set.",
      tags: ["makeup", "beauty"],
      rating:4.0,
      numReviews:13,
    },
    {
      _id: 7,
      name: "Facial Cleanser",
      price: 17.99,
      type: "skin",
      availableQuantity: 110,
      image: img3,
      status: "Available",
      description: "Cleanse your skin and remove impurities with our facial cleanser.",
      tags: ["cleanser", "skincare"],
      rating:4.8,
      numReviews:8,
    },
    {
      _id: 8,
      name: "Conditioner for Frizzy Hair",
      price: 14.99,
      type: "hair",
      availableQuantity: 70,
      image: img6,
      status: "Available",
      description: "Smooth and tame frizzy hair with our conditioner for frizzy hair.",
      tags: ["conditioner", "haircare"],
      rating:4.3,
      numReviews:10,
    },
   
  ];
  
  export default products;