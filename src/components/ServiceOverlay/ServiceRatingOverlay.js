import React from 'react'
import "./ServiceRatingOverlay.css"
import rating5 from "./Group112.svg";
import rating4 from "./Group111.svg";
import rating3 from "./Group110.svg";
import rating2 from "./Group109.svg";
import rating1 from "./Group108.svg";
import { useState } from 'react';

function ServiceRatingOverlay() {
    const [state, setstate] = useState("")
    return (
        <div className="service-box">
            <h3>Please rate my services before you leave.</h3>
            <p>{state}</p>
            <div className="rating-flex">
                <img src={rating5}  alt="WORSE" onClick={()=>setstate("WORSE")}/>
                <img src={rating4}  alt="BAD" onClick={()=>setstate("BAD")}/>
                <img src={rating3}  alt="OKAY" onClick={()=>setstate("OKAY")}/>
                <img src={rating2}  alt="GOOD" onClick={()=>setstate("GOOD")}/>
                <img src={rating1}  alt="GREAT" onClick={()=>setstate("GREAT")}/>
            </div>
        </div>
    )
}

export default ServiceRatingOverlay
