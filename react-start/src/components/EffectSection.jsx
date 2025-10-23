import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";

export default function EffectSection() {
  const [modal, SetModal] = useState(false);
  function openModal() {
    SetModal(true);
  }
  return (
    <>
      <h3>Эффекты в Реакт</h3>;
      <Button onClick={openModal}>Открыть информацию</Button>;
      <Modal open={modal}>
        <h3>Hello Modal</h3>
        <p>
          Hello ModalHello ModalHello ModalHello ModalHello ModalHello
          ModalHello ModalHello ModalHello Modal
        </p>
        <Button onClick={() => SetModal(false)}>CLOSE</Button>
      </Modal>
    </>
  );
}
