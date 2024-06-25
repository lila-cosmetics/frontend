import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

function Message({color='info', children}) {
  return (
    <Alert color={color} icon={HiInformationCircle}>
        {children}
  </Alert>
  )
}

export default Message