import React, { useState, useEffect } from 'react';
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "./upcomingevents.css";

function UpcomingEvents() {
    const [upev, setUpev] = useState([]);
    const upevCollectionRef = collection(db, "upcomingev");

    useEffect(() => {
        const getUpev = async () => {
            const data = await getDocs(upevCollectionRef);
            setUpev(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUpev();
    }, []);

    return (
        <div>
            
                <div className="ucontainer">
                {upev.map((event) => (
                    <div key={event.id} className="upev">
                        <div className="upsf">
                            <div className="upsn">
                                <center>
                                    <p className="streg">Stage</p>
                                    <p className="stbold">{event.stageno}</p>
                                </center>
                            </div>
                            <div className="upsd">
                                <h2>{event.itemn}</h2>
                                <p><i className="ri-time-line" width="16px" height="16px"></i> {event.time} onwards</p>
                                <p><i className="ri-team-line"></i> {event.participants} people participating</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            
        </div>
    );
}

export default UpcomingEvents;
