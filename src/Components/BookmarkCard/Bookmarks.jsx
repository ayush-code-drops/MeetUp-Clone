import React from "react";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import BookmarkCard from "../BookmarkCard/BookmarkCard";
import { removeFromBookmark } from "../../redux/bookmark/action";

export default function LayoutPage() {
  const bookmarks = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  const handelClick = (item) => {
    dispatch(removeFromBookmark(item.id));
  };

  console.log("Heloow, ", bookmarks);
  return (
    <div>
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

      <Footer />
    </div>
  );
}
