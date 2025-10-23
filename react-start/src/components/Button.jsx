import s from "./style.module.css";

export default function Button({ children, onClick, isActive, ...props }) {
  return (
    <button
      {...props}
      className={isActive ? s.buttonActive : s.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
