import React, { useState } from "react";

interface MoneyProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  customProp?: string;
}

export function Money(props: MoneyProps) {
  return (
    <div>
      <input
        placeholder="Введите сумму"
        onFocus={props.onFocus}
        onChange={props.onChange}
        value={props.value}
        {...props}
      ></input>
    </div>
  );
}
