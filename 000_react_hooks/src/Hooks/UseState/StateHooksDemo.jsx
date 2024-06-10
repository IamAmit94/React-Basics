import React, { useState }  from 'react'

const StateHooksDemo = () => {
    const [inputValue, setInputValue] = useState('type anything')
  
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }
    return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      <br/>
      {inputValue}
    </div>
  )
}

export default StateHooksDemo