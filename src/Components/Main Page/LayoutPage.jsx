import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import styles from '../Navbar/navbar.module.css'
import Component1 from './Component1'
import TealButton from './TealButton'
import NextEvent from '../../Pages/HomePageComps/NextEvent'
import { EventNoteSharp } from '@mui/icons-material'
import Event from '../Event/Event'
import { useSelector, useDispatch } from "react-redux";
import BookmarkCard from "../BookmarkCard/BookmarkCard";
import { removeFromBookmark } from "../../redux/bookmark/action";
import Description from "../Description/Description";
// import tealButton from './TealButton'
export default function LayoutPage() {
  // const bookmarks = useSelector((state) => state.bookmarks);
  // const dispatch = useDispatch();

  // const handelClick = (item) => {
  //   dispatch(removeFromBookmark(item.id));
  // };

  // console.log("Heloow, ", bookmarks);
    const isAuth = useSelector(state => state.auth.isAuth)
    
    if (isAuth) {
return <Redirect to="/home"/>
    }
    return (
        <div>

{/* <Description /> */}
   
     
            <Navbar />

             <img className={styles.blueBlob} src="https://secure.meetupstatic.com/next/images/blobs/green-blob.svg" alt="img"/>
            <img className={styles.yellowBlob} src="https://secure.meetupstatic.com/next/images/blobs/yellow-blob.svg" alt="img"/>
            <img className={styles.redBlob} src="https://secure.meetupstatic.com/next/images/blobs/red-blob.svg" alt="img" />

            <section className={styles.sec1}>
                <div className={styles.sec1Grid}>
                    <div className={styles.sec1sec1}>
                        <h1 className={styles.sec1h1}>Celebrating 20 years of real connections on Meetup</h1>
                        <p className={styles.sec1p}>Whatever you are looking to do this year, Meetup can help. For 20 years, people have turned to Meetup to meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening every day—join the fun.</p>
                    </div>   
                    <div className={styles.sec1img}>
                        <img className={styles.sec1img} width="427px" height="290px" src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080" alt="img" />
                    </div>
                </div>
            </section>
            
           
          
            <Component1 />
            <div className={styles.tealcont}>
               <TealButton label="Boost your career"/> 
               <TealButton label="Find your zen"/> 
               <TealButton label="Get moving"/> 
               <TealButton label="Share language + culture"/> 
               <TealButton label="Read with friends"/> 
               <TealButton label="Write together"/> 
               <TealButton label="Hone your craft"/> 
            </div>
            <div className={styles.nextSec}>

<NextEvent/>

<div className={styles.next2}>

<h1>Check out what’s happening:</h1>

<div className={styles.tealcont}>

<TealButton label="Starting Soon"/>

<TealButton label="Today"/>

<TealButton label="Tommorow"/>

<TealButton label="This Week"/>

<TealButton label="Online"/>

<TealButton label="In Person"/>

<TealButton label="Trending Near you"/>

</div>

</div>

            </div>
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
            <Footer />
            
 </div>



     

   
   
  );
}
