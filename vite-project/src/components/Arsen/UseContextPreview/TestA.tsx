import { useState } from "react";
import { ContextTest } from "../Context";
import TestB from "./TestB";


function TestA() {
    const [text, setText] = useState('')
console.log(text);

    const contextReview = {
    text: text,
    textRedact: (e:any)=>{
        setText(e)
    }
}
    return ( <div>

        <ContextTest.Provider value={contextReview}>
            <TestB/>
        </ContextTest.Provider>
    </div> );
}

export default TestA;