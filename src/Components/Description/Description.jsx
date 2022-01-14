import styles from "./description.module.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToAttending, removeFromAttending } from "../../redux/attend/action";
import { useState } from "react";

function Description(a) {
  const [state, setState] = useState(false);

  const eventsAttending = useSelector((state) => state.attending);
  const dispatch = useDispatch();
  const handelClick = (a) => {
    if (state === false) {
      dispatch(addToAttending(a));
      setState(true);
    } else {
      dispatch(removeFromAttending(a.id));
      setState(false);
    }
  };
  console.log(eventsAttending);
  console.log("Hua juch");
  return (
    <div>
      <div className={styles.container1}>
        <p className={styles.data}>{a.date}</p>
        <h1 className={styles.event}>{a.event_name}</h1>
        <div className={styles.host}>
          <img
            className={styles.user}
            src="https://etfbild.com/wp-content/uploads/2016/10/avatar.png"
            alt="user"
          />
          <div>
            <p className={styles.p1}>Hosted by</p>
            <p className={styles.p2}>{a.hosted_by}</p>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={a.img_url} alt="event" />
          <Button
            className={styles.button}
            sx={{ maxWidth: "160px", marginLeft: "160px" }}
            variant="contained"
            color="error"
            onClick={() => handelClick(a)}
          >
            {state ? "Attening" : "Attend Event"}
          </Button>
        </div>
        <h2>Details</h2>
        <p>{a.public_details}</p>
        <p>{a.presentation_details}</p>
        <p>{a.workshop_details}</p>
      </div>
    </div>
  );
}

export default Description;
