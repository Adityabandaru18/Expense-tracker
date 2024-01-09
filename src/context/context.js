import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Cashcontext = createContext();

export default function ContextProvider(props){
    const [posmoney,setposmoney] = useState(0);
    const [negmoney,setnegmoney] = useState(0);
    const [tot,settot] = useState("");
    const [text,settext] = useState("");
    
    return(
        <Cashcontext.Provider value={{posmoney,setposmoney,negmoney,setnegmoney,text,settext,tot,settot}}>
            {props.children}
        </Cashcontext.Provider>
    )
}