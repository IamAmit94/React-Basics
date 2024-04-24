import { useState } from "react"
import OtpInput from "./otp-input";

const PhoneOtpForm = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false)

    const handlePhoneNumber = (event) => {setPhoneNumber(event.target.value)}
    const handlePhoneSubmit = (event) => {
        event.preventDefault()
        // Phone number validation
        const regex = /[^0-9]/g;
        if(phoneNumber.length<10 || regex.test(phoneNumber)) {
            alert(`invalid phonenumber`);
            return;
        }
        // call backend API
        //show OTP field
        setShowOtpInput(true)
    }

const onOtpSubmit = (otp) => {
    console.log(`Successfull login with otp :`,otp)
}

  return (
    <div>
        {!showOtpInput ? (<form onSubmit={handlePhoneSubmit}>

<input 
type="text"
value={phoneNumber}
onChange={handlePhoneNumber}
placeholder="Enter phone Number"
/>

<button type="submit">Submit</button>
</form>) : (<div>
<p>Enter otp send to {phoneNumber}</p>
<OtpInput length = {4} onOtpSubmit={onOtpSubmit}/>
</div>
)}
    </div>
  )
}

export default PhoneOtpForm