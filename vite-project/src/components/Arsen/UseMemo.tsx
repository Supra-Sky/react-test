import { useState, useMemo, useEffect } from "react";

function heavyTask (num: number): number{
for(let i= 0; i <= 2000000000; i++){}
return num * 2
}


function UseMemo() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNum = useMemo(()=>heavyTask(number), [number])

   const themeStyle = {
    backgroundColor: dark ? '#000' : '#fff' 
   }

   useEffect(()=>{
console.log('theme changed');

   }, [themeStyle])
    return ( 
        <div style={{...themeStyle}}>
        <input type="number" onChange={(e)=> setNumber(parseInt(e.target.value))}/>
        <button onClick={()=>setDark((prev)=>!prev)}>change theme</button>
        <p>{doubleNum}</p>
        </div>
     );
}

export default UseMemo;