import { useState } from "react"


function Shipping() {

    const [address, setAddress]= useState('')
    const [city, setCity]= useState('')
    const [postalCode, usePostalCode] = useState('')
    const [country, setCountry]= useState('')

  return (
    <div>Shipping</div>
  )
}

export default Shipping