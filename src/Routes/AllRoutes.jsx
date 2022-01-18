import { HorizontalRule } from "@mui/icons-material";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Event from "../Components/Event/Event";
import LayoutPage from "../Components/Main Page/LayoutPage";
import Home from "../Pages/HomePage";
import HorizontalLinearStepper from "../CreateYourGroup/HorizontalLinearStepper";
import Navbar2 from "../Components/Navbar/Navbar2";
import Description from "../Components/Description/Description";
import Group from "../Pages/Group";
import SavedEvents from "../Pages/SavedEvents";
import Attending from "../Components/Attending/Attending";
export default function AllRoutes() {
  return (
    <div>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <LayoutPage />
      </Route>

      <Route exact path="/creategroup">
        <HorizontalLinearStepper />
      </Route>
        
            <Route exact path='/events'>
                <div>
                    <Navbar2 />
                    <Event />
        </div>
        </Route>
          
           

      <Route exact path="/events/:id">
       <Description/>
      </Route>
      <Route exact path="/yourgroups">
<Group/>
      </Route>
      <Route exact path="/yourevents">
<SavedEvents/>
      </Route>
      <Route exact path="/upcomingEvents">
<Attending/>
      </Route>
    </div>
  );
}
