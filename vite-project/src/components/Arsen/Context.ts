import { createContext } from "react";

interface ReviewContextType {
    text: string,
    textRedact: (e:any) => void
}

export interface ReviewBalanceType {
    balance: number,
    setValue: (e:any) => void
}
export const ContextTest= createContext<ReviewContextType>({
    text: '',
    textRedact: ()=>{}
})

export const balanceValue = createContext<ReviewBalanceType>({
    balance: 0,
      setValue: ()=>{}
})