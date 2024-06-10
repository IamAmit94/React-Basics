import React, { useLayoutEffect, useState } from 'react'

const UseLayoutEffectDemo = () => {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
      // Measure the width of a DOM element after it's been rendered
      const elementWidth = document.getElementById('example').offsetWidth;
      setWidth(elementWidth);
    }, []); // Run only once after initial render
  
    return <div id="example">Width: {width}px</div>;
}

export default UseLayoutEffectDemo

// UseEffect is showed to us after the data is load
//however UseLayoutEffect is called before the data load