import React, {  createContext, useContext, useState,useEffect } from 'react'

const crypto = createContext();
const Cryptocontext = ({children}) => {
    const [currency,setcurrency] = useState("INR");
    const [symbol,setsymbol] = useState("ru");

    useEffect(() => {
      if(currency==="INR"){
          setsymbol("₹");
      } else {
          setsymbol("$");
      }
    }, [currency]);
    
  return (
    <crypto.Provider value={{currency, symbol, setcurrency}}>
      {children}
    </crypto.Provider>
  )
}

export default Cryptocontext;

export const Cryptostate = () =>{
    return  useContext(crypto)
}