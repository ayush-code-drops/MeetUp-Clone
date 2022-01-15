import styles from "./description.module.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToAttending, removeFromAttending } from "../../redux/attend/action";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Description() {
  const { id } = useParams();
  const [state, setState] = useState(false);

  console.log("Param Id = ", id);

  const data = [
    {
      id: 1,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/499473240/333x188.webp",
      date: "5/19/2022",
      event_name: "Flutter Indian Kathmandu Monthly - January",
      event_place: "Noida",
      attendees: 24,
      event_mode: "online",
      category: "Art & Culture",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 2,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/501197289/333x188.webp",
      date: "6/25/2022",
      event_name: "Mobile Flock - Chapter 3 [Online]",
      event_place: "Noida",
      attendees: 102,
      event_mode: "In-person",
      category: "Career & Business",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 3,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/494314279/333x188.webp",
      date: "8/11/2022",
      event_name:
        "FREE Online Event for Learning Communication, Leadership & Networking",
      event_place: "Noida",
      attendees: 3,
      event_mode: "online",
      category: "Community & Environment",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 4,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/501229671/333x188.webp",
      date: "3/11/2022",
      event_name: "AWS Lambda",
      event_place: "Noida",
      attendees: 4,
      event_mode: "online",
      category: "Dancing",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 5,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/500613123/333x188.webp",
      date: "6/27/2022",
      event_name:
        "Data Engineering with Google Cloud A Masterclass by Dan Sullivan",
      event_place: "Delhi",
      attendees: 78,
      event_mode: "online",
      category: "Movements & Politics",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 6,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/231269622/333x188.webp",
      date: "8/7/2022",
      event_name: "Lets Talk About Life...",
      event_place: "Delhi",
      attendees: 6,
      event_mode: "online",
      category: "Religion & Spirituality",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 7,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/493061406/333x188.webp",
      date: "4/7/2022",
      event_name: "Learn how to create a Customer Journey Map",
      event_place: "Delhi",
      attendees: 83,
      event_mode: "online",
      category: "Science & Education",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 8,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/488272003/333x188.webp",
      date: "5/4/2022",
      event_name: "Online Learn Communication, Leadership & Networking",
      event_place: "Kanpur",
      attendees: 8,
      event_mode: "online",
      category: "Travel & Outdoor",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 9,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/490151677/333x188.webp",
      date: "10/1/2022",
      event_name: "Vendor Connect Program - Axind Software Pvt Ltd",
      event_place: "Kanpur",
      attendees: 86,
      event_mode: "In-person",
      category: "Writing",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 10,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/500947913/333x188.webp",
      date: "10/9/2022",
      event_name:
        "AI Summit 2022 with Speakers: Feifei Li, Sam Altman, Reid Hoffman, and more",
      event_place: "Writing",
      attendees: 100,
      event_mode: "online",
      category: "Travel & Outdoor",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 11,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/500818376/333x188.webp",
      date: "8/2/2022",
      event_name: "Transition into UX Design- A workshop by Garima Mehta",
      event_place: "Gurgaon",
      attendees: 11,
      event_mode: "online",
      category: "Social Activities",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 12,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/501229544/333x188.webp",
      date: "3/12/2022",
      event_name:
        "[Startup Sprint] Upcoming Event | 91Springboard x Google For Startups",
      event_place: "Goa",
      attendees: 122,
      event_mode: "online",
      category: "Pets & Animals",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 13,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/499432382/333x188.webp",
      date: "7/4/2022",
      event_name: "Make new friends india + singapore + malaysia",
      event_place: "Lucknow",
      attendees: 131,
      event_mode: "online",
      category: "Movements & Politics",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 14,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/501243543/333x188.webp",
      date: "10/2/2022",
      event_name:
        "FREE Online Meetings to Ace your public speaking, leadership skills",
      event_place: "Delhi",
      attendees: 19,
      event_mode: "online",
      category: "Identity & Language",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 15,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/500536280/333x188.webp",
      date: "8/29/2022",
      event_name: "Spoken English - Counselling Session",
      event_place: "Haryana",
      attendees: 153,
      event_mode: "In-person",
      category: "Parents & Family",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 16,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/499473240/333x188.webp",
      date: "5/19/2022",
      event_name: "The Purpose of life in Buddhism",
      event_place: "Noida",
      attendees: 24,
      event_mode: "online",
      category: "Music",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 17,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/501197289/333x188.webp",
      date: "6/25/2022",
      event_name: "Power Platform Bootcamp 2022- Kathmandu, Nepal",
      event_place: "Noida",
      attendees: 102,
      event_mode: "In-person",
      category: "Hobbies & Passions",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 18,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/494314279/333x188.webp",
      date: "8/11/2022",
      event_name: "Meetup#23-[Tokenomics]",
      event_place: "Noida",
      attendees: 3,
      event_mode: "online",
      category: "Social Activities",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 19,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/501229671/333x188.webp",
      date: "3/11/2022",
      event_name: "SOULS BREATHWORK",
      event_place: "Noida",
      attendees: 4,
      event_mode: "online",
      category: "Support & Coaching",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 20,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/488405729/333x188.webp",
      date: "6/27/2022",
      event_name: "Becoming Successful at Investing [Online Webinar Series]",
      event_place: "Delhi",
      attendees: 78,
      event_mode: "online",
      category: "Technology",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 21,
      img_url:
        "FREE Online Meetings to Ace your public speaking, leadership skills",
      date: "8/7/2022",
      event_name: "Lets Talk About Life...",
      event_place: "Delhi",
      attendees: 6,
      event_mode: "online",
      category: "Pets & Animals",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 22,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/493061406/333x188.webp",
      date: "4/7/2022",
      event_name: "Join us for Pro Orators Toastmasters Club Meeting",
      event_place: "Delhi",
      attendees: 83,
      event_mode: "online",
      category: "Art & Culture",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 23,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/488272003/333x188.webp",
      date: "5/4/2022",
      event_name: "What book are you reading?",
      event_place: "Kanpur",
      attendees: 8,
      event_mode: "online",
      category: "Travel & outdoor",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 24,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/490151677/333x188.webp",
      date: "10/1/2022",
      event_name: "Vendor Connect Program - Axind Software Pvt Ltd",
      event_place: "Kanpur",
      attendees: 86,
      event_mode: "In-person",
      category: "Parents & Family",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 25,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/500947913/333x188.webp",
      date: "10/9/2022",
      event_name: "Make new friends india + singapore + malaysia",
      event_place: "Kanpur",
      attendees: 100,
      event_mode: "online",
      category: "Music",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 26,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/500818376/333x188.webp",
      date: "8/2/2022",
      event_name: "Let's discuss your brand and ways to market it",
      event_place: "Gurgaon",
      attendees: 11,
      event_mode: "online",
      category: "Movements & Politics",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 27,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/501229544/333x188.webp",
      date: "3/12/2022",
      event_name: "10 min conversation.",
      event_place: "Goa",
      attendees: 122,
      event_mode: "online",
      category: "Pets & Animals",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 28,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/499432382/333x188.webp",
      date: "7/4/2022",
      event_name: "ToastMasters Community club of Gurgaon",
      event_place: "Lucknow",
      attendees: 131,
      event_mode: "online",
      category: "Art & Culture",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 29,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/501243543/333x188.webp",
      date: "10/2/2022",
      event_name: "Learn how to create a Customer Journey Map",
      event_place: "Delhi",
      attendees: 19,
      event_mode: "online",
      category: "Pets & Animals",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    },
    {
      id: 30,
      img_url:
        "https://secure-content.meetupstatic.com/images/classic-events/495111582/333x188.webp",
      date: "8/29/2022",
      event_name:
        "Let's discuss more about Python machine learning behaviour, its advantages...",
      event_place: "Haryana",
      attendees: 153,
      event_mode: "In-person",
      category: "Art & Culture",
      public_details:
        "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
      presentation_details: "Call for Presentation: Coming soon",
      workshop_details:
        "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
      hosted_by: "Damodar Lohani and Ambika Dulal"
    }
  ];

  const a = data[id - 1];
  // {
  //   id: 2,
  //   img_url:
  //     "https://secure-content.meetupstatic.com/images/classic-events/501197289/333x188.webp",
  //   date: "6/25/2022",
  //   event_name: "Mobile Flock - Chapter 3 [Online]",
  //   event_place: "Noida",
  //   attendees: 102,
  //   event_mode: "In-person",
  //   category: "Art & Culture",
  //   public_details:
  //     "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
  //   presentation_details: "Call for Presentation: Coming soon",
  //   workshop_details:
  //     "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop.",
  //   hosted_by: "Damodar Lohani and Ambika Dulal"
  // }

  const eventsAttending = useSelector((state) => state.attending);
  console.log(eventsAttending);

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
