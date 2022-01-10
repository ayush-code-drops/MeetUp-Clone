import React from 'react'
import { Route, Switch } from 'react-router-dom'

export default function AllRoutes() {
    return (
        <div>
            <Switch>
                <Route exact path='/home'> 
            <div>home</div>        
        </Route>    
             
            </Switch>
            
        </div>
    )
}
