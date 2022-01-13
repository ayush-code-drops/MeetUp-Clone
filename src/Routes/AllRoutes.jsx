import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Event from '../Components/Event/Event';

export default function AllRoutes() {
    return (
        <div>
            <Switch>
                <Route exact path='/home'> 
            <div>home</div>        
        </Route>    
        <Route exact path="/EVENTS"><Event /> </Route>
             
            </Switch>
            
        </div>
    )
}
