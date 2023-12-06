import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

/* eslint-disable react/prop-types */

function CityItem({ city }) {
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));
  const { cityName, date, emoji, id, position } = city;

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng${position.lng}`}
        className={styles.cityItem}
      >
        <span className={styles.emoji}>{emoji}</span>
        <p className={styles.name}>{cityName}</p>
        <time className={styles.date}>{formatDate(date)}</time>
      </Link>
    </li>
  );
}

export default CityItem;
