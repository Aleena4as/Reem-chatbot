import React from "react";
import moment from "moment";
import { Tween } from "react-gsap";
import { decodeString } from "../../../utils/Function";
import get from 'lodash.get';

export default props => {
    const currentTime = new moment().format("h:mm");
    return (
        <div className="user-reply-container">
            <Tween from={{ x: "50px", opacity: 0 }}>
                <div className="user-reply">{decodeString(get(props.chat, "text", ""))}</div>
                <span>
                    {/* <img src={require("../../../public/images/Group 45.svg")} alt="" /> */}
                    {currentTime}
                </span>
            </Tween>
        </div>
    );
};
