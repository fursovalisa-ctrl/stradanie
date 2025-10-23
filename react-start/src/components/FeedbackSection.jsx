import Button from "./Button";
import { useRef } from "react";
import { useState } from "react";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setShow(true);
    }
  }
  return (
    <>
      <h3>Input:{show && input.current.value}</h3>
      <input ref={input} type="text" onKeyDown={handleKeyDown}></input>
    </>
  );
}

export default function FeedbackSection() {
  const [name, SetName] = useState("");
  const [reason, SetReason] = useState("help");
  const [hasError, SetHasError] = useState(false);
  function handleNameChange(event) {
    SetName(event.target.value);
    SetHasError(event.target.value.trim().length === 0);
  }

  return (
    <>
      <h3>Обратная связь</h3>
      <p>Отзывы Отзывы Отзывы Отзывы Отзывы Отзывы Отзывы Отзывы</p>
      <form style={{ margin: "1rem" }} action="">
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          style={{ border: hasError ? "1px solid red" : null }}
        ></input>
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          name={reason}
          onChange={(event) => SetReason(event.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Есть предложение</option>
        </select>
        <Button disabled={hasError}>Отправить</Button>
        <pre>
          Name: {name}
          <br></br>
          Reason: {reason}
        </pre>
      </form>
      <StateVsRef />
    </>
  );
}
