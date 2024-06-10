import React, { useRef } from "react";
// UseRef hooks is mainly used to focus on the dom element, currently in this we are focusing on the text box
// once the button is clicked and then empty the text from the textbox.

function UseRefDemo() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Your Name</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default UseRefDemo;


/**When you click on the button it will focus on the textbox and
 * your cursor will be at the start of the textbox
 */