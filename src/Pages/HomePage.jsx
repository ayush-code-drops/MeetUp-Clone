import React from 'react';
import TextField from '@mui/material/TextField';
import styles from "./homePage.module.css"
import Button from '@mui/material/Button';
import Footer from '../Components/Footer/Footer';
import Navbar2 from '../Components/Navbar/Navbar2';
import { Link } from 'react-router-dom';
import TealButton from '../Components/Main Page/TealButton'
const Home = () => {
    const handleclick2 = () => {
        console.log(2);
        <Link to="/findgroup"></Link>
    }
    const handleclick1 = () => {
        console.log(1);
        <Link to="/findevent"></Link>
    }
    return(
        <div>
            <Navbar2 style={{color:"white"}}/>
            {/* <div style={{height:"60px",backgroundColor:"yellow"}}> */}
             {/* </div> */}

             
            <div>
                <img src="/photoImg1.svg" alt="img"/>
                <h1 style={{fontWeight:"bold",fontSize:"35px"}}>Welcome to Meetup!!!</h1>
            </div>
            <div style={{display:"flex",gap:"3rem",padding:"5rem"}}>
                <div style={{backgroundColor:"white",display:"flex",padding:"3rem",margin:"20px",width:"50%"}}>
                    <div>
                        <img src="/photoImg2.svg" alt="img"/>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <h3>Find your first event</h3>
                        <p>Events are happening 24/7. What do you want to do?</p>
                        <Button variant="outlined" onClick={handleclick2}>Discover Events</Button>
   
                    </div>
               
                </div>
                <div style={{backgroundColor:"white",display:"flex",padding:"3rem",margin:"20px",width:"50%"}}>
                    <div>
                        <img src="/photoImg3.svg" alt="img"/>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <h3>Join your first group</h3>
                        <p>As a member, you’ll receive updates each time your group schedules new events.</p>
                        <Button variant="outlined" onClick={handleclick1}>Join Groups</Button>
   
                    </div>
                    </div>
               
            </div>
            <TealButton/>
            <Footer/>
        </div>

    )
}

export default Home;