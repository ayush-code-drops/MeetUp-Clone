import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./homePage.module.css";
import Button from "@mui/material/Button";
import Footer from "../Components/Footer/Footer";
import Navbar2 from "../Components/Navbar/Navbar2";
import { Link } from "react-router-dom";
import TealButton from "../Components/Main Page/TealButton";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import NextEvent from "./HomePageComps/NextEvent";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import BookmarkCard from "../Components/BookmarkCard/BookmarkCard";
import { removeFromBookmark } from "../redux/bookmark/action";
// import Description from  "../Components/Description/Description"

import Attending from "../Components/Attending/Attending";

const Home = () => {

  const { location, setLocation } = useContext(AppContext);
  const { name, setName } = useContext(AppContext);

  const bookmarks = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  const handelClick = (item) => {
    dispatch(removeFromBookmark(item.id));
  };

  localStorage.setItem("arr", [location, name]);

  // const [name2,setName2] = useState("");
  console.log("hi", name, location);
  const history = useHistory();
  const handleclick2 = () => {
    console.log(2);
    history.push("/events");
  };
  const handleclick1 = () => {
    console.log(1);
    // <Link to="/findevent"></Link>
  };

  const isAuth = useSelector((state) => state.auth.isAuth);

  // if (!isAuth) {
  //     return <Redirect to='/'/>
  // }

  return (
    <div>
      <Navbar2 style={{ color: "white" }} />
      {/* <Attending /> */}

      {/* <div style={{height:"60px",backgroundColor:"yellow"}}> */}
      {/* </div> */}

      {/* <div>{name}{location}</div> */}
      <div>
        <img src="/photoImg1.svg" alt="img" />
        <h1 style={{ fontWeight: "bold", fontSize: "35px" }}>
          Welcome to Meetup!!!
        </h1>
      </div>
      <div style={{ display: "flex", gap: "3rem", padding: "5rem" }}>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            padding: "3rem",
            margin: "20px",
            width: "50%"
          }}
        >
          <div>
            <img src="/photoImg2.svg" alt="img" />
          </div>
          <div style={{ textAlign: "left" }}>
            <h3>Find your first event</h3>
            <p>Events are happening 24/7. What do you want to do?</p>
            <Button variant="outlined" onClick={handleclick2}>
              Discover Events
            </Button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            padding: "3rem",
            margin: "20px",
            width: "50%"
          }}
        >
          <div>
            <img src="/photoImg3.svg" alt="img" />
          </div>
          <div style={{ textAlign: "left" }}>
            <h3>Join your first group</h3>
            <p>
              As a member, you all receive updates each time your group schedules
              new events.
            </p>
            <Button variant="outlined" onClick={handleclick1}>
              Join Groups
            </Button>
          </div>
        </div>
      </div>

      {bookmarks.length > 0 && <h1>Saved Events</h1>}
      {bookmarks.length > 0 &&
        bookmarks.map(
          ({
            id,
            img_url,
            event_mode,
            date,
            event_name,
            event_place,
            attendees
          }) => (
            <BookmarkCard
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
            
            {/* {bookmarks.length > 0 && <h1>Saved Events</h1>}
      {bookmarks.length > 0 &&
        bookmarks.map(
          ({
            id,
            img_url,
            event_mode,
            date,
            event_name,
            event_place,
            attendees
          }) => (
            <BookmarkCard
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
        )} */}

      {/* if (name)  ( */}
      {/* { count && <h1>Messages: {count}</h1>} */}
      {/* {name && (
        <div>
          <h3>Your Created Groups will show here.</h3>

          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              padding: "3rem",
              margin: "20px",
              width: "50%",
              margin: "auto"
            }}
          >
            <div>
              <img
                src="https://secure-content.meetupstatic.com/images/classic-events/500613123/333x188.webp"
                alt="img"
                style={{
                  height: "150px",
                  width: "150px",
                  borderRadius: "10px",
                  marginRight: "10px"
                }}
              />
            </div>
            <div style={{ textAlign: "left" }}>
              <h3>Event Name : {name}</h3>
              <p>
                <strong>Event Location : </strong>
                {location}
              </p>
              <p>
                {" "}
                <strong> Event Description :</strong> Warm welcome from Nepal
                Cloud Professional's community! In Azure Saturday, we are
                planning to come up with following topics of discussions:
              </p>
              <p>----------------------------------</p>
              <p>
                {" "}
                <strong> SESSION DETAILS </strong>
              </p>
              <p>----------------------------------</p>
              <p>
                11:00am – 11:30am - Getting started with Azure Cognitive
                Services
              </p>
              <p></p>
            </div>
          </div>
        </div>
      )} */}

      {/* ) */}

      {/* <TealButton/> */}
      <div className={styles.nextSec}>
        <NextEvent />

        <div className={styles.next2}>
          <h1>Check out what’s happening:</h1>

          <div className={styles.tealcont}>
            <TealButton label="Starting Soon" />

            <TealButton label="Today" />

            <TealButton label="Tommorow" />

            <TealButton label="This Week" />

            <TealButton label="Online" />

            <TealButton label="In Person" />

            <TealButton label="Trending Near you" />
          </div>
        </div>
      </div>

      {
                    name && <div style={{marginBottom : "60px"}}>
                    <h3>Your Created Groups will show here.</h3>
    
                    <div style={{backgroundColor:"white",display:"flex",padding:"1rem",margin:"20px",width:"50%",margin:"auto",borderRadius:"20px"}}>
                        <div style={{marginTop:"20px"}}>
                            <img src="https://secure-content.meetupstatic.com/images/classic-events/500613123/333x188.webp" alt="img" style={{height:"150px",width:"150px",borderRadius:"10px",marginRight:"10px"}}/>
                        </div>
                        <div style={{textAlign:"left"}}>
                            <h3>Event Name : {name}</h3>
                            <p><strong>Event Location : </strong>{location}</p>
                            <p> <strong> Event Description :</strong> Warm welcome from Nepal Cloud Professional's community! In Azure Saturday, we are planning to come up with following topics of discussions:</p>
                            <p>----------------------------------</p>
                            <p> <strong>{" "}{" "}{" "}  SESSION DETAILS </strong></p>
                            <p>----------------------------------</p>
                            <p>11:00am – 11:30am - Getting started with Azure Cognitive Services</p>
                            <p></p>
                        </div>
                   
                    </div>
                    </div>
                }
      <Footer />
    </div>
  );
};

export default Home;
