import Button from "../Button";
import s from "../style.module.css";
import Collapse from "./Collapse";
import { useState } from "react";

export default function TabsSection({ active, onChange }) {
  return (
    <>
      <section>
        <Button isActive={active === "main"} onClick={() => onChange("main")}>
          Заголовки
        </Button>
        <Button
          isActive={active === "feedback"}
          onClick={() => onChange("feedback")}
        >
          Обратная связь
        </Button>
        <Button
          isActive={active === "effect"}
          onClick={() => onChange("effect")}
        >
          Effect
        </Button>
      </section>
      <section className={s.Collapse}>
        <Collapse />
      </section>
    </>
  );
}
