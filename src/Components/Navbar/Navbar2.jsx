import React, { useContext } from 'react'
import styled from 'styled-components'
// import BasicModal from './LoginModal'
import styles from './navbar.module.css'
// import LanguageIcon from '@mui/icons-material/Language';
// import SignupModal from './SignupModal';
import TextField from '@mui/material/TextField';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContextProvider';


const Nav = styled.nav`
display:flex;
justify-content:space-between;
padding:14px;
background-color:white;
`

const IconImage = styled.img`
  height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
`;





export default function Navbar2() {
    const [location,setLocation]=React.useState("")
    const [keyword, setKeyword] = React.useState("")
    const history = useHistory()
    const{data,setData}=React.useContext(AppContext)
    const handleSearch = () => {
        if (keyword === "" || location === "") {
            alert("Either location or text missing")
        }
        else {

            const eveList = data.filter((item) => item.event_place == location).filter(
                (item) => item.workshop_details.includes(keyword))
        

            setData(eveList)
            history.push('./events')
        }
    }
    return (
        <Nav className={styled.navComp}>
           
            <logoCont>
                <Link to="/home">
                <img  src="./logo.svg" alt="logo-img" style={{marginRight:"30px"}}  />

                </Link>
                
            <TextField id="outlined-basic" value={keyword} onChange={(e)=>setKeyword(e.target.value)} label="Search for keywords" variant="outlined" />
            <TextField value={location} onChange={(e)=>setLocation(e.target.value)} id="outlined-basic" label="City or zip code" variant="outlined" />
          <button onClick={handleSearch} style={{backgroundColor:"tomato",border:"none",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}}>  <IconImage
          src="https://cdn-icons-png.flaticon.com/512/6583/6583229.png"
          alt="icon"
          ByteLengthQueuingStrategy
        /></button>
            </logoCont>
            <div className="startGroup">
                <Link className={styles.grouplink} to="/createGroup">Start a new group - 30% off!</Link>
           </div>
            <div className={styles.linkDiv}>
                <div style={{marginleft: 10,fontSize:"20px"}}>
                    <MessageIcon/>
                </div>
            
                <div style={{marginleft: 10,fontSize:"20px"}}>
                     <NotificationsIcon/>
               </div>
                   
                <div style={{marginleft: 10,fontSize:"20px"}}>
                    <AssignmentIndIcon/>
                </div>
                    
              
            </div>
        </Nav>
    )
}
