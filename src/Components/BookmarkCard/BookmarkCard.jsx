
import KeepMountedModal from "../Event/KeepMountedModal";
import styles from "./bookmark.module.css";
import StarIcon from "@mui/icons-material/Star";

function BookmarkCard({
  id,
  img_url,
  event_mode,
  date,
  event_name,
  event_place,
  attendees,
  handelClick
}) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.image} src={img_url} alt="event" />
      </div>
      <div className={styles.text}>
        <p className={styles.p1}>{date}</p>
        <p className={styles.p2}>{event_name}</p>
        <p className={styles.p3}>
          {event_mode} • {event_place}, IN
        </p>
        <p className={styles.p4}>
          <div>{attendees} attendees</div>
          <KeepMountedModal />
          <StarIcon
            sx={{
              marginLeft: "10px",
              color: "rgb(246,88,88)",
              cursor: "pointer"
            }}
            onClick={() =>
              handelClick({
                id,
                img_url,
                event_mode,
                date,
                event_name,
                event_place,
                attendees
              })
            }
          />
        </p>
      </div>
    </div>
  );
}

export default BookmarkCard;
