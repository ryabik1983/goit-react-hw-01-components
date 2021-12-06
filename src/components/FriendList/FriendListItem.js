import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ item }) {
  return (
    <li className={styles.item} key={item.id}>
      <span
        className={item.isOnline ? styles.statusOnline : styles.statusOffline}
      ></span>
      <img
        className={styles.avatar}
        src={item.avatar}
        alt={item.name}
        width="48"
      />
      <p className={styles.name}>{item.name}</p>
    </li>
  );
}
FriendListItem.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  name: 'User',
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
