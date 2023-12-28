import css from "./Feature.module.css";
import { getRandomColor } from "./getRandomColor";

export const Feature = ({ id, label, percentage }) => {

  return (
    <li key={id}
      style={{ backgroundColor: getRandomColor() }}
      className={css.item}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>
    )
}