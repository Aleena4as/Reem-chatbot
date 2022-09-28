import React from "react";
import { Tween } from "react-gsap";

export default props => {
    return (
        <div className="textbox-container">
            <Tween from={{ y: "100px", opacity: 0, delay: 2 }}>
                <input
                    type="text"
                    placeholder="Let's start a conversation"
                    onClick={() => props.showLandingScreen(false)}
                />
            </Tween>
        </div>
    );
};
