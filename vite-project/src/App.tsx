
import './App.css'

import UseEffectArsen from './components/Arsen/UseEffectArsen.tsx'
import UseMemo from './components/Arsen/UseMemo.tsx';
import UseStateArsen from './components/Arsen/UseStateArsen.tsx'
import { useState } from 'react';
import { balanceValue } from './components/Arsen/Context.ts';
import UseRef from './components/Arsen/UseRef.tsx';

function App() {
const [balance, setBalance] = useState(0);
// function setBalanceChekout (money:number) {
//   setBalance((prev:number)=>prev + money)
// }
const balanceReview = {
  balance: balance,
  setValue: (e:number)=>{
    setBalance(e)
  }
}
  return (
    <>
    <div className='main-container'>
      <balanceValue.Provider value={balanceReview}>
<UseStateArsen/>
<UseEffectArsen/>
</balanceValue.Provider>
<UseMemo/>
<UseRef/>
    
    </div></>
  )
}

export default App
