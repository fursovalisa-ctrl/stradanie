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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const activeValue = event.target.value;
    if (activeValue === "" || /^\d+$/.test(activeValue)) {
      setData(activeValue);
    }
    if (activeValue) {
      const result = convertCurrency(activeValue, currency, valuta);
      setSumma(result);
    } else {
      setSumma("");
    }
  }

  function handleSumma(event: React.ChangeEvent<HTMLInputElement>) {
    const activeSumma = event.target.value;
    if (activeSumma === "" || /^\d+$/.test(activeSumma)) {
      setSumma(activeSumma);
    }
    if (activeSumma) {
      const result = convertCurrency(activeSumma, valuta, currency);
      setData(result);
    } else {
      setData("");
    }
  }
  const convertCurrency = (
    amount: string,
    from: string,
    to: string
  ): string => {
    if (!amount) return "";
    if (from === to) return amount;
    const num = parseFloat(amount);
    const fromRate = cash.find((item) => item.name === from)?.usdAmount;
    const toRate = cash.find((item) => item.name === to)?.usdAmount;

    if (!fromRate || !toRate) return "";
    return ((num * fromRate) / toRate).toString();
  };

  const handleSelectChange =
    (whichSelect: "top" | "down") =>
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = event.target.value;

      if (whichSelect === "top") {
        setCurrency(newValue);
        const result = convertCurrency(data, newValue, valuta);
        setData(result);
      } else {
        setValuta(newValue);
        const result = convertCurrency(summa, newValue, currency);
        setSumma(result);
      }
    };

  const handleFocus =
    (setter: React.Dispatch<React.SetStateAction<string>>) => () => {
      setter("");
    };

  return (
    <div>
      <Header>Конвертер валют</Header>
      <Currency onChange={handleSelectChange("top")} />
      <Money
        onFocus={handleFocus(setData)}
        onChange={handleChange}
        value={data}
      />
      <Currency onChange={handleSelectChange("down")} />
      <Money
        onFocus={handleFocus(setSumma)}
        onChange={handleSumma}
        value={summa}
      />
    </div>
  );
}
