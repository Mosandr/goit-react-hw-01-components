import PropTypes from "prop-types";
import defaultAvatar from "../Profile/default-avatar.png";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{addComas(stats.followers)}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{addComas(stats.views)}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{addComas(stats.likes)}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultAvatar,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;

function addComas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
