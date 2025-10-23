import React, { useState } from 'react';
import {cash} from "./data"

interface CurrencyProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
   customProp?: string;
}

export function Currency (props: CurrencyProps) {
     return(
        <div>
             <select {...props}>
            {cash.map((item)=>
                <option key={item.id} value={item.name}>{item.name}</option>  
            )}
              </select>
           
        </div>
    )
}