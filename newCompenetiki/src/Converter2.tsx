import React, { useCallback } from "react";
import { Header } from "./components/Header";
import { Money } from "./components/Money";
import { Currency } from "./components/Сurrency";
import { useState } from "react";
import { cash } from "./components/data";
import { useEffect } from "react";

export default function Converter() {
  const [currency, setCurrency] = useState("RUB");
  const [valuta, setValuta] = useState("RUB");
  const [data, setData] = useState("");
  const [summa, setSumma] = useState("");


  const handleClick = (event, whichInput: "top" | "down") => {
  const activeData = event.target.value;
  if (activeData === "" || /^\d+$/.test(activeData)) {
      const sourceData = whichInput === "top" ? setData(activeData) : setSumma(activeData)};
      if (!sourceData) return;

      const num = parseFloat(activeData);
      const factor = cash.find(
        (item) => item.name === (whichInput === "top" ? currency : valuta)
      )?.usdAmount;
      const tofactor = cash.find(
        (item) => item.name === (whichInput === "top" ? valuta : currency)
      )?.usdAmount;

      if (whichInput === "top") {
        setSumma(((num * Number(factor)) / Number(tofactor)).toString());
      } else {
        setData(((num * Number(factor)) / Number(tofactor)).toString());
      }
 

  const handleFocus =
    (setter: React.Dispatch<React.SetStateAction<string>>) => () => {
      setter("");
    };

  return (
    <div>
      <Header>Конвертер валют</Header>
      <Currency onChange={(event) => setCurrency(event.target.value)} />
      <Money
        onFocus={handleFocus(setData)}
        onChange={handleClick("top")}
        value={data}
      />
      <Currency onChange={(event) => setValuta(event.target.value)} />
      <Money
        onFocus={handleFocus(setSumma)}
        onChange={handleClick("down")}
        value={summa}
      />
    </div>
  );
}
