import {useLayoutEffect, useEffect, useRef } from 'react'

const useLayoutEffect2 = () => {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        // console.log('======>UseLayoutEffect !')
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        // console.log("UseEffect !")
        inputRef.current.value = "HELLO"
    },[])

  return (
    <div className='App'>
        <input ref={inputRef} value="Amit" style={{width: 400, height: 200}}/>
    </div>
  )
}

export default useLayoutEffect2




/**UseLayoutEffect is called earlier then the uselayoutEffect before the 
 * rendering of the page. On the other hand the useEffect is called after the 
 * page is render successfully.
 * 
 * UseLayoutEffect is called firstly before the page is loaded.
 * 
 * 
 * While reloading the page you can see that the 'Amit' is displayed
 * before 'Hello' and this happen in a slight moment of time.
 */