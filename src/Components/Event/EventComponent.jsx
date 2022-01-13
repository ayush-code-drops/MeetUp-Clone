import styles from './component.module.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import KeepMountedModal from './KeepMountedModal';

function EventComponent() {
    return (
        <div className={styles.container}>
            <div >
                <img className={styles.image} src="https://secure-content.meetupstatic.com/images/classic-events/462927384/222x125.webp" alt="event" />
            </div>
            <div className={styles.text}> 
                <p className={styles.p1} >FRI, FEB 11 @ 7:00 PM IST</p>
                <p className={styles.p2} >Valentine @ Dubai - 11th Feb to 16th Feb, INR 39999</p>
                <p className={styles.p3} >Delhi Travel Club • Delhi, IN</p>
                <p className={styles.p4} ><div>2 attendees</div>
                <KeepMountedModal />
                <StarBorderOutlinedIcon sx={{marginLeft:"10px", color:"#979595" }} />
                </p>
            </div>
        </div>
    )
}

export default EventComponent;