import  { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  // const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("")

  /*
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
        setData(response.data[19].email);
        console.log("API WAS CALLED");
      });
  }, [count]); // we will be putting the empty array in order to run the useEffect once
  // In order to call it everytime we can pass the count in array this will 
  // call api everytime button is clicked
  // useEffect is mainly used to handle the API calls
  */

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      const randomIndex = Math.floor(Math.random() * response.data.length);
      const randomEmail = response.data[randomIndex].email;
      setEmail(randomEmail);
      console.log("API WAS CALLED");
    });
  }, [count]); // if we replace the count the random email will not be displayed

  return (
    <div>
      <div>Random Email : <h3>{email}</h3></div>
      Hello World
      {/* <h1>{data}</h1> */}
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
