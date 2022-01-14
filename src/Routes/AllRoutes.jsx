import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Event from '../Components/Event/Event';
import LayoutPage from '../Components/Main Page/LayoutPage';

export default function AllRoutes() {
    return (
        <div>
            <Switch>
                <Route exact path='/home'> 
                <div>Home</div>  
        </Route>    
                <Route exact path='/'> 
           <LayoutPage/>     
        </Route>    
                <Route>
                    <div>404 Page Not Found</div>
                 </Route>
            </Switch>
            
        </div>
    )
}
