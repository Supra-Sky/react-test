import { useState, useEffect, useContext } from 'react';
import './mainCss.css'
    import { balanceValue } from "./Context";
// interface UseEffectArsenProps {

//     fnSetterBalance: (balance: any) => void;
// }

function UseEffectArsen() {

    const contextBalance = useContext(balanceValue)
    const [time, setTime] = useState(0);
    const [isStart, setIsStart] = useState(false);
   const [walletValue, setWalletValue] = useState(0)

const formatTime = (totalSeconds: any) => {
        const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;


    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

   const checkout  = () => {

setWalletValue(0)
contextBalance.setValue((prev: number)=>prev + walletValue)
   }
    const toggle = () => setIsStart((s)=>!s)
    const toggleStop = () => {
        setTime(0)
        setIsStart(false)
    }
    useEffect(() => {
        if(!isStart) return
let a = setInterval(()=>{
setTime((s)=> s + 1)

}, 1000)
let b = setInterval(()=>{
    setWalletValue((b)=>b + 0.35)
}, 1000)
return () => {
    clearInterval(a)
 clearInterval(b)
}    

}, [isStart])



    return ( 
   
        <div className='contentBox'>
        <p>{formatTime(time)}</p>
        <h2>WORK TIMER</h2>
{isStart ? (<button className='middle-btn'  onClick={toggle}>Pause</button>) : (<button className='primary-btn' onClick={toggle}>Start</button>) }
<button className='negative-btn'  onClick={toggleStop}>Stop and reset</button>
<p style={{fontWeight: 800}}>Your bid is 0.35$/10sec</p>
<p>Your current local balance: {walletValue.toFixed(2)}$</p>
<button className="inline-btn" onClick={checkout}>Checkout on balance</button>

</div>
   

     );
}

export default UseEffectArsen;

