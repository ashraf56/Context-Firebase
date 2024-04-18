import { useEffect } from "react";

let useTitle=title=>{
    useEffect(()=>{
document.title=title;

    },[title])
}

export default useTitle;