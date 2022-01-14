import { HorizontalRule } from '@mui/icons-material';
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Event from '../Components/Event/Event';
import LayoutPage from '../Components/Main Page/LayoutPage';
import Home from '../Pages/HomePage';
import HorizontalLinearStepper from '../CreateYourGroup/HorizontalLinearStepper';
export default function AllRoutes() {
    return (
        <div>
            
                <Route exact path='/home'> 
               <Home/>  
        </Route>    
                <Route exact path='/'> 
           <LayoutPage/>     
        </Route>    
        
                <Route exact path='/creategroup'> 
        <HorizontalLinearStepper/>   
        </Route>    
                
           
            
        </div>
    )
}
