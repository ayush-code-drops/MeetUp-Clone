import styles from "./description.module.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToAttending, removeFromAttending } from "../../redux/attend/action";
import { useState } from "react";

var a = {
  id: 29,
  img_url:
    "https://secure-content.meetupstatic.com/images/classic-events/501243543/333x188.webp",
  date: "10/2/2022",
  event_name:
    "FREE Online Meetings to Ace your public speaking, leadership skills",
  event_place: "Delhi",
  attendees: 19,
  event_mode: "online",
  category: "Art & Culture",
  public_details:
    "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
  presentation_details: "Call for Presentation: Coming soon",
  workshop_details:
    "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
  hosted_by: "Damodar Lohani and Ambika Dulal"
};

function Description() {
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
