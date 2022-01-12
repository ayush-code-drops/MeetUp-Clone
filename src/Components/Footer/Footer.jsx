import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from './footer.module.css'; 



const styleImg = {
    height: "42px",
    cursor: "pointer"
}

function Footer() {
    return (
        <div className={styles.footer}>
            <h4 className={styles.head1}>Create your own Meetup group.<button className={styles.buttong }>Get Started</button></h4>
            <hr />
            <div className={styles.container}>
                <div className={styles.items}>
                    <p className={styles.heading}>Your Account</p>
                    <p>Settings</p>
                    <p>Logout</p>
                    <p>Help</p>
                </div>
                <div className={styles.items}>
                    <p className={styles.heading}>Discover</p>
                    <p>Groups</p>
                    <p>Calendar</p>
                    <p>Topics</p>
                    <p>Cities</p>
                    <p>Online Events</p>
                    <p>Local Guides</p>
                </div>
                <div className={styles.items}>
                    <p className={styles.heading}>Meetup</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Meetup Pro</p>
                    <p>Careers</p>
                    <p>Apps</p>
                </div>
            </div>

            <div className={styles.container1}>
                <div className={styles.division1}>
                
                    <p className={styles.heading}>Follow us</p>
                    <FacebookIcon sx={{ cursor:"pointer" }} fontSize='large' />
                    <TwitterIcon sx={{ marginLeft:'35px', cursor:"pointer"}} fontSize='large'/>
                    <YouTubeIcon sx={{ marginLeft:'35px', cursor:"pointer"}} fontSize='large'/>
                    <InstagramIcon sx={{ marginLeft:'35px', cursor:"pointer"}} fontSize='large'/>
                </div>
                <div className={styles.division2}>
                    <img style={styleImg} src='https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=128' alt='image' />
                    <img className={styles.appleStore} src='https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=128' alt='image' />
                </div>
            </div>
            <div className={styles.bottom}>
                <p>© 2022 Meetup</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Help</p>
            </div>
        </div>
    )
}

export default Footer;