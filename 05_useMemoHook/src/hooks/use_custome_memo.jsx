import { useEffect, useRef } from "react";


const areEqual = (prevDeps, nextDeps) => {
    if(prevDeps === null) return false;
    if(prevDeps.length !== nextDeps.length) return false;

    for(let i = 0; i < prevDeps.length; i++) {
        if(prevDeps[i] !== nextDeps[i]) {
            return false
        }
    }
    return true
}


const useCustomMemo = (cb, deps) => {
    //variable or state -> cached value
    const memoizedRef = useRef();
   //change in DepsArray
    if(!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
        memoizedRef.current = {
            value: cb(),
            deps
        };
    }

    // cleanup login
    useEffect(() => {
        return () => {
            memoizedRef.current = null
        }
    }, [])

    // return memoised value
    return memoizedRef.current.value;
}


export default useCustomMemo