import { Feature } from "./Feature";
import css from "./Statistics.module.css";

const Statistics = ({ title, stats="" }) => {
  return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(({id, label, percentage}) => (
            <Feature
              key={id}
              label={label}
              percentage={percentage}
            />
          ))}
        </ul>
      </section>
  );
};

export { Statistics };