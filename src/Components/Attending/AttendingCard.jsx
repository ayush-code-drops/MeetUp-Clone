import DoneIcon from "@mui/icons-material/Done";
import styles from "./attending.module.css";

function AttendingCard({ a }) {
  return (
    <div className={styles.container}>
      <div>
        <img
          style={{ height: "120px", borderRadius: "10px", marginRight: "20px" }}
          src={a.img_url}
          alt="attending-event"
        />
      </div>
      <div className={styles.container2}>
        <p className={styles.p1}>{a.date}</p>
        <p className={styles.p2}>{a.event_name}</p>
        <p className={styles.p3}>
          <div className={styles.line3}>{a.event_place}</div>
          <div>
            <DoneIcon
              sx={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "50%"
              }}
            />
          </div>
          <div className={styles.line4}>Attending</div>
        </p>
      </div>
    </div>
  );
}

export default AttendingCard;
