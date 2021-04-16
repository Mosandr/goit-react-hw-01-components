import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>UPLOAD STATS</h2>}

      <ul className={styles.statList}>
        {stats.map((stat, index) => (
          <li key={stat.label} className={styles.item} style={randomBgr(index)}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage + "%"}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: null,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;

function randomBgr(index) {
  const bg = {};
  const i = index / 3 > 1 ? index % 4 : index;
  const colors = ["#4FC4F7", "#A33DF2", "#E74B68", "#20B8C5"];
  bg.backgroundColor = colors[i];
  return bg;
}
