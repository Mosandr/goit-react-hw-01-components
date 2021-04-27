import PropTypes from "prop-types";
import FriendsListItem from "../FriendsListItem/FriendsListItem";
import styles from "../FriedsList/FriendsList.module.css";

const FriendsList = ({ friendsList }) => {
  return (
    <ul className={styles.friendsList}>
      {friendsList.map(({ id, avatar, name, isOnline }) => (
        <FriendsListItem
          key={id.toString()}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default FriendsList;
