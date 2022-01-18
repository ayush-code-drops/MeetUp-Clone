
import React from 'react'
import { useContext } from "react";

import { AppContext } from "../context/AppContextProvider";
export default function Group() {
    const { location, setLocation } = useContext(AppContext);
    const { name, setName } = useContext(AppContext);
        return (
        <div>
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
            </div>  
         )   
    }
    