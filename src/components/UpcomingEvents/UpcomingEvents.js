import React, { useState, useEffect } from 'react';
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import "./upcomingevents.css";

function UpcomingEvents({ docId }) {
    const [results, setResults] = useState(null);
  return (
    <div>UpcomingEvents</div>
  )
}

export default UpcomingEvents