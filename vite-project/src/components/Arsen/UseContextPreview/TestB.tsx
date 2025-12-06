import { useContext } from "react";
import { ContextTest } from "../Context";

function TestB() {
    const contextText = useContext(ContextTest)
const textFn = contextText.textRedact
    console.log(contextText.text);
    
    
    return ( <div>
<input type="text" placeholder="write your text" onChange={(e)=>textFn(e.target.value)}/>
    </div> );
}

export default TestB;