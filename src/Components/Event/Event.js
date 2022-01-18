import * as React from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import EventComponent from "./EventComponent";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark, removeFromBookmark } from "../../redux/bookmark/action";
import { AppContext } from '../../context/AppContextProvider';
import eventlog from "../../eventsdata.json"
const styleContainer = {
  width: "640px",
  marginLeft: "12vw"
};

function Event() {
  

  const distance = [2, 5, 10, 25, 50, 100];

  const category = [
    "Art & Culture",
    "Career & Business",
    "Community & Environment",
    "Dancing",
    "Games",
    "Health & Wellbeing",
    "Hobbies & Passions",
    "Identity & Language",
    "Movements & Politics",
    "Music",
    "Parents & Family",
    "Pets & Animals",
    "Religion & Spirituality",
    "Science & Education",
    "Social Activities",
    "Sports & Fitness",
    "Support & Coaching",
    "Technology",
    "Travel & Outdoor",
    "Writing"
  ];

  const [dayType, setDayType] = React.useState("");
  const [cost, setCost] = React.useState("");

  const [type, setType] = React.useState("");
  const [dist, setDist] = React.useState(Infinity);
  const [cate, setCate] = React.useState("");

  
  const handleType = (event) => {
    setType(event.target.value);
  };
  const handleDist = (event) => {
    setDist(event.target.value);
  };
  

  const { data, setData } = React.useContext(AppContext)
//console.log("datanhi",data)
  // const getEvents = async () => {
  //   let eventData = await axios.get(
  //     "https://meetupserverjsonserver.herokuapp.com/posts"
  //   );
  //   eventData = eventData.data;
  //   setData(eventData);
  //   console.log(eventData);
  // };

  // React.useEffect(() => {
  //   getEvents();
  // }, []);
  const handleDayType = (event) => {
    setCost(event.target.value)
    console.log("cost",cost)
    if (cost === "free"||cost==="") { 
      const costdata = eventlog.filter((item) => item.id%2==0)
      setData(costdata)
    }
    if (cost === "paid") { 
     const costdata =eventlog.filter((item) => item.id%2!==0)
      setData(costdata)
    }

  };
  const handleCategory = (event) => {
    
    setCate(event.target.value);
    console.log("caaat", cate)
    if (cate === "") {
      const catdata = eventlog?.filter((item) => item.category == "Art & Culture")
      setData(catdata)
    }
    else {
      const catdata = eventlog?.filter((item) => item.category == cate)
      setData(catdata)
     }
    // console.log("cat",cate,catdata)
  };
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);
  console.log("Bookmarks", bookmarks);
  const handelClick = (item) => {
    console.log("handel click");
    for (let i = 0; i < bookmarks.length; i++) {
      if (item.id === bookmarks[i].id) {
        dispatch(removeFromBookmark(item.id));
        return;
      }
    }
    dispatch(addToBookmark(item));
  };

  console.log("bookmarks - ", bookmarks);

  return (
    <div style={styleContainer}>
      <br />
      <div>

        Filter Options:
        <Select
          sx={{ maxHeight: 46, m: 1, borderRadius: 10, minWidth: 140 }}
          value={cost}
          onChange={handleDayType}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Any Cost</em>
          </MenuItem>
          <MenuItem value="free">
            Free
          </MenuItem>
        
            <MenuItem value="paid">Paid</MenuItem>
         
        </Select>
        <Select
          sx={{ maxHeight: 46, m: 1, borderRadius: 10, minWidth: 140 }}
          value={type}
          onChange={handleType}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Any Type</em>
          </MenuItem>
          <MenuItem value="Online">Online</MenuItem>)
          <MenuItem value="InPerson">In Person</MenuItem>)
        </Select>

        {/* <Select
          sx={{ maxHeight: 46, m: 1, borderRadius: 10, minWidth: 140 }}
          value={dist}
          onChange={handleDist}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={Infinity}>
            <em>Any Distance</em>
          </MenuItem>
          {distance.map((d) => (
            <MenuItem value={d}>{d} miles</MenuItem>
          ))}
        </Select> */}

        <Select
          sx={{ maxHeight: 46, m: 1, borderRadius: 10, minWidth: 140 }}
          value={cate}
          onChange={handleCategory}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Any Category</em>
          </MenuItem>
          {category.map((d) => (
            <MenuItem value={d}>{d}</MenuItem>
          ))}
        </Select>
      </div>

      {data.length !== 0 ? (
        <div>
          {type === ""
            ? data.map(
                ({
                  id,
                  img_url,
                  date,
                  event_mode,
                  event_name,
                  event_place,
                  attendees
                }) => (
                  <EventComponent
                    key={id}
                    id={id}
                    img_url={img_url}
                    event_mode={event_mode}
                    date={date}
                    event_name={event_name}
                    event_place={event_place}
                    attendees={attendees}
                    handelClick={handelClick}
                  />
                )
              )
            : type === "Online"
            ? data
                .filter(({ event_mode }) => event_mode === "online")
                .map(
                  ({
                    id,
                    img_url,
                    date,
                    event_mode,
                    event_name,
                    event_place,
                    attendees
                  }) => (
                    <EventComponent
                      kye={id}
                      id={id}
                      img_url={img_url}
                      event_mode={event_mode}
                      date={date}
                      event_name={event_name}
                      event_place={event_place}
                      attendees={attendees}
                      handelClick={handelClick}
                    />
                  )
                )
            : data
                .filter(({ event_mode }) => event_mode === "In-person")
                .map(
                  ({
                    id,
                    img_url,
                    date,
                    event_mode,
                    event_name,
                    event_place,
                    attendees
                  }) => (
                    <EventComponent
                      key={id}
                      id={id}
                      img_url={img_url}
                      event_mode={event_mode}
                      date={date}
                      event_name={event_name}
                      event_place={event_place}
                      attendees={attendees}
                      handelClick={handelClick}
                    />
                  )
                )}
        </div>
      ) : (
        <Stack spacing={1}>
          <hr />
          <Skeleton variant="rectangular" width={640} height={128} />
          <Skeleton variant="rectangular" width={640} height={128} />
          <Skeleton variant="rectangular" width={640} height={128} />
          <Skeleton variant="rectangular" width={640} height={128} />
          <Skeleton variant="rectangular" width={640} height={128} />
          <Skeleton variant="rectangular" width={640} height={128} />
        </Stack>
      )}
    </div>
  );
}

export default Event;
