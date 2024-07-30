import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; //since we need redirect
import { saveShippingAddress } from "../slices/cartSlice";
import { Button, Label, TextInput } from "flowbite-react";


function Shipping() {
  const cart = useSelector((state) => state.cart); //since we need the state of our cart we use useSelector
  const { shippingAddress } = cart; // destructure the shipping address from cart

  const [address, setAddress] = useState(shippingAddress?.address || '');
  const [city, setCity] = useState(shippingAddress?.city || '');
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || '');
  const [country, setCountry] = useState(shippingAddress?.country||'');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <div className="flex flex-col items-center justify-center m-20">
      <div className="w-full max-w-md p-5 bg-white rounded-lg shadow-md">
        <h2 className="text-center mb-10">Shipping Address</h2>
        <form className="flex  flex-col gap-4" onSubmit={submitHandler}>
          <div>
            {" "}
            {/* Address field */}
            <div className="mb-2 block">
              <Label htmlFor="address" value="Your address" />
            </div>
            <TextInput
              id="address"
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div>
            {" "}
            {/* city field */}
            <div className="mb-2 block">
              <Label htmlFor="city" value="Your city" /> City
            </div>
            <TextInput
              id="city"
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div>
            {" "}
            {/* postalcode field */}
            <div className="mb-2 block">
              <Label htmlFor="postalcode" value="Your postal code" />
            </div>
            <TextInput
              id="postalcode"
              type="text"
              placeholder="Enter your postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </div>

          <div>
            {" "}
            {/* country field */}
            <div className="mb-2 block">
              <Label htmlFor="country" value="Your country" /> 
            </div>
            <TextInput
              id="country"
              type="text"
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>



          <Button type="submit" className="bg-primary hover:bg-gray-200" >Continue</Button>

        </form>
      </div>
    </div>
  );
}

export default Shipping;
