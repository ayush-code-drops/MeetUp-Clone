import { useSelector } from "react-redux";
import AttendingCard from "./AttendingCard";

function Attending() {
  const attending = useSelector((state) => state.attending);
  console.log("Apple = ", attending);

  return (
    attending.length > 0 && (
      <div>
        <h1
          style={{ textAlign: "left", marginLeft: "80px", marginTop: "50px" }}
        >
          Your Saved Events
        </h1>
        {attending.map((event) => (
          <AttendingCard a={event} />
        ))}
      </div>
    )
  );
}

export default Attending;
