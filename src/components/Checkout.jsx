import {  Timeline } from "flowbite-react";
import { NavLink } from "react-router-dom";

import { MdOutlineAccountCircle, MdOutlineLocalShipping } from "react-icons/md";
import { BsPaypal } from "react-icons/bs";
import { SlPresent } from "react-icons/sl";

function Checkout({step1, step2, step3, step4}) {
  return (
    <Timeline horizontal>
        {step1 ? ( <NavLink to='/login'>

   
            <Timeline.Item>
      <Timeline.Point icon={MdOutlineAccountCircle} />
      <Timeline.Content>
        <Timeline.Title>Sign in</Timeline.Title>  
      </Timeline.Content>
    </Timeline.Item>     </NavLink>) : (<NavLink disabled  >Sign in</NavLink>)}
     
    

{step2? (
    <NavLink to='/shipping'>
         <Timeline.Item>
      <Timeline.Point icon={MdOutlineLocalShipping} />
      <Timeline.Content>
       
        <Timeline.Title>Shipping</Timeline.Title>
        
      </Timeline.Content>
    </Timeline.Item>

    </NavLink>
): (<NavLink disabled >Shipping</NavLink>)}
   

    <Timeline.Item>
      <Timeline.Point icon={BsPaypal} />
      <Timeline.Content>
       
        <Timeline.Title>Payment</Timeline.Title>
        
      </Timeline.Content>
    </Timeline.Item>

    <Timeline.Item>
      <Timeline.Point icon={SlPresent} />
      <Timeline.Content>
       
        <Timeline.Title>Place Order</Timeline.Title>
        
      </Timeline.Content>
    </Timeline.Item>



  </Timeline>
  )
}

export default Checkout