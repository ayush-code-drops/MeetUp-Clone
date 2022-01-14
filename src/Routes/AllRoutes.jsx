import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Description from "../Components/Description/Description";
import Event from "../Components/Event/Event";

export default function AllRoutes() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let dataset = axios.get(
      "https://meetupserverjsonserver.herokuapp.com/posts"
    );
    dataset = dataset.data;
    setData(dataset);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <div>home</div>
        </Route>
        {data.map((d) => (
          <Route exact path={`/event/${d.id}`}>
            <Description a={d} />
          </Route>
        ))}
      </Switch>
    </div>
  );
}
