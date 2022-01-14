import styles from "./component.module.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import KeepMountedModal from "./KeepMountedModal";

function EventComponent({
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
        <img
          className={styles.image}
          src={img_url}
          alt="event"
          onClick={() => handelClick(id)}
        />
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
          <StarBorderOutlinedIcon
            sx={{ marginLeft: "10px", color: "#979595", cursor: "pointer" }}
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

export default EventComponent;
