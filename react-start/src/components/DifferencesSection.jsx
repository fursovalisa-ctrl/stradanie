import Button from "./Button";
import s from "./style.module.css";
import { useState } from "react";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState("Нажми на кнопку");
  function handleclick(type) {
    setContentType(type);
  }
  return (
    <section className={s.buttons}>
      <h3 className={s.h3}>Para-para-pam</h3>
      <div className={s.bubuttons}>
        <Button
          isActive={contentType === "way"}
          onClick={() => handleclick("way")}
        >
          para
        </Button>
        <Button
          isActive={contentType === "easy"}
          onClick={() => handleclick("easy")}
        >
          para
        </Button>
        <Button
          isActive={contentType === "jopa"}
          onClick={() => handleclick("jopa")}
        >
          pam
        </Button>
      </div>
      <p className={s.p} style={{ margin: "10px 0px 10px 450px" }}>
        {contentType}
      </p>
    </section>
  );
}
