import { useRef, useState } from "react";

function UseRef() {
    // const [count, setCount] = useState(0)
    
    const useRefInp = useRef(null)
    
    const onClickButton = (e: any)=>{
        e.preventDefault()

        if(useRefInp.current){

   
        console.log(useRefInp.current);
             }
    }
    
    
    return ( 
        <div>
<input ref={useRefInp} type="text"/>
<button onClick={onClickButton}>Send info Input</button>
        </div>
     );
}

export default UseRef;