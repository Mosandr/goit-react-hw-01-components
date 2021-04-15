import PropTypes from "prop-types";

const FriendsList = ({ friends }) => {
  return <div>FriendList</div>;
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendsList;
