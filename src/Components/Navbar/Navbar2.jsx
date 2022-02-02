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
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import eventlog from "../../eventsdata.json"
// import Dropdown from 'react-bootstrap/Dropdown'

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
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log('e',eventlog)
    setAnchorEl(null);
  };
    const [location,setLocation]=React.useState("")
    const [keyword, setKeyword] = React.useState("")
    const history = useHistory()
    var {data,setData}=React.useContext(AppContext)
  const handleSearch = () => {
    console.log("eve",eventlog)
    data=eventlog
    
    
    console.log('searchdata',data)
        if (keyword === "" && location === "") {
            alert("Search with either location or keyword")
        }
    
    else if (location === "") {
      const eveList = data.filter(
        (item) => item.workshop_details.includes(keyword))


    setData(eveList)
    history.push('./events')
        }
          
        else if (keyword === "") { 
          const eveList = data.filter((item) => item.event_place == location)
    

        setData(eveList)
        history.push('./events')
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
            <div className={styles.linkDiv2}>
                <div style={{marginleft: 10,fontSize:"20px"}}>
                    <ChatBubbleOutlineIcon/>
                </div>
            
                <div style={{marginleft: 10,fontSize:"20px"}}>
                    <NotificationsNoneIcon sx={{fontSize:'28px'}}/>
               </div>
                   
               

                <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
                        <AccountCircleIcon sx={{fontSize:'40px',color:'#F64060',m:1,marginLeft:'-10px',marginBottom:'10px'}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
                        <MenuItem onClick={handleClose}><Link className={styles.menulink} to='/yourevents'>SavedEvents</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className={styles.menulink} to='/yourgroups'>Your Groups</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className={styles.menulink} to='/upcomingEvents'>Upcoming Events</Link></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>

                    
              
            </div>
        </Nav>
    )
}
