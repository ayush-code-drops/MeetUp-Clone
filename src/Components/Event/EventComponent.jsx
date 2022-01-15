import styles from "./component.module.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import KeepMountedModal from "./KeepMountedModal";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [state, setState] = useState(false);

  return (
    <div className={styles.container}>
      <div>
        <Link to={`/event/${id}`}>
          <img
            className={styles.image}
            src={img_url}
            alt="event"
            onClick={() => handelClick(id)}
          />
        </Link>
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
          {state === false ? (
            <StarBorderOutlinedIcon
              sx={{ marginLeft: "10px", color: "#979595", cursor: "pointer" }}
              onClick={() => {
                handelClick({
                  id,
                  img_url,
                  event_mode,
                  date,
                  event_name,
                  event_place,
                  attendees
                });
                setState(!state);
              }}
            />
          ) : (
            <StarIcon
              sx={{
                marginLeft: "10px",
                color: "rgb(246,88,88)",
                cursor: "pointer"
              }}
              onClick={() => {
                handelClick({
                  id,
                  img_url,
                  event_mode,
                  date,
                  event_name,
                  event_place,
                  attendees
                });
                setState(!state);
              }}
            />
          )}
        </p>
      </div>
    </div>
  );
}

export default EventComponent;
