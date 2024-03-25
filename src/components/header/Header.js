import React, { useState, useEffect } from 'react';
import liveey from "../../img/livv.png";
import dum from "../../img/dumms.gif";
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import "./header.css";

function Header({ docId }) {
    const [homepg, setHomepg] = useState(null);

    useEffect(() => {
        const getHomepg = async () => {
            const docRef = doc(db, "homepg", docId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setHomepg({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log("No such document!");
            }
        };
        if (docId) {
            getHomepg();
        }
    }, [docId]);

    return (
        <div>
            {homepg && (
                <center>
                    <a href={homepg.link}>
                        <div className="livee">
                            <img srcSet={liveey} alt="bggs"></img>
                            <div className="lvp">
                                <p className="ln">
                                    <img className="dumy" srcSet={dum} alt="lv"></img>
                                    Live Now
                                </p>
                                <p className="item1">{homepg.item}</p>
                            </div>
                            </div>
                    </a>
                </center>
            )}
        </div>
    );
}

export default Header;
