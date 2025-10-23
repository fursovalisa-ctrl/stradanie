import s from "./style.module.css";

export default function WayToTeach(props) {
  return (
    <li className={s.li}>
      <p>
        <strong>{props.title}</strong>
        {props.description}
      </p>
    </li>
  );
}
