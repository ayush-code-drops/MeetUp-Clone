import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from '../Navbar/navbar.module.css'
export default function LayoutPage() {
    return (
        <div>
            <Navbar />

             <img className={styles.blueBlob} src="https://secure.meetupstatic.com/next/images/blobs/green-blob.svg" alt="img"/>
            <img className={styles.yellowBlob} src="https://secure.meetupstatic.com/next/images/blobs/yellow-blob.svg" alt="img"/>
            <img className={styles.redBlob} src="https://secure.meetupstatic.com/next/images/blobs/red-blob.svg" alt="img" />

            <section className={styles.sec1}>
                <div className={styles.sec1Grid}>
                    <div className={styles.sec1sec1}>
                        <h1 className={styles.sec1h1}>Celebrating 20 years of real connections on Meetup</h1>
                        <p className={styles.sec1p}>Whatever you’re looking to do this year, Meetup can help. For 20 years, people have turned to Meetup to meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening every day—join the fun.</p>
                    </div>   
                    <div className={styles.sec1img}>
                        <img className={styles.sec1img} width="427px" height="290px" src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080" alt="img" />
                    </div>
</div>
            </section>
          
        </div>
    )
}
