import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(item => FriendListItem({ item }))};
    </ul>
  );
};
FriendList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default FriendList;
