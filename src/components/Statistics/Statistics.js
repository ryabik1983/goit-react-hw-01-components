import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticItem from './StatisticItem';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statsList}>
        {stats.map(item => StatisticItem({ item }))}
      </ul>
    </section>
  );
};
Statistics.defaultProps = {
  title: 'Title',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default Statistics;
