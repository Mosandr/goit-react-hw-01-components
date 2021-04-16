import PropTypes from "prop-types";
import defaultAvatar from "../FriendsListItem/default-avatar.png";
import styles from "../FriendsListItem/FriendsListItem.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.online}></span>
      ) : (
        <span className={styles.offline}></span>
      )}
      <img
        className={styles.avatar}
        src={avatar}
        alt="Аватар пользователя"
        width={48}
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendsListItem.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
