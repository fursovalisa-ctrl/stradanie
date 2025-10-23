import { useState } from "react";
import s from "./style.module.css";
import logo from "/vite.svg";

export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date(), 1000));
  return (
    <div className={s.header}>
      <div className={s.headerLogo}>
        <img className={s.headerIMG} src={logo} alt="" />
        <p>ResultUniversity</p>
      </div>
      <span> Время сейчас {now.toLocaleTimeString()} </span>
    </div>
  );
}
