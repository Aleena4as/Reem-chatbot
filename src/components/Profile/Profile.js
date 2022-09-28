import React, { Component } from "react";
import { Tween } from "react-gsap";
import get from 'lodash.get';
export default class Profile extends Component {
    state = {
        activeLink: null,
        isDisabled: false
    };

    selectOptions = (payload, title) => {
        this.setState({
            isDisabled: true,
            activeLink: title
        });
        this.props.sendQuickMessage(payload, title);
    };

    openDoctorProfile = link => {
        const url = `${link}`;
        let open = window.open(url);
        if (open === null || typeof open == "undefined") {
            alert(
                "We attempted to launch Doctor's Profile in a new window, but a popup blocker is preventing it from opening. Please disable popup blockers."
            );
        }
    };

    render() {
        const { activeLink, isDisabled } = this.state;
        const { chat } = this.props;
        return (
            <Tween from={{ y: "-50px", opacity: 0 }}>
                <div className="profile-container">
                    {chat.data.map((data, index) => (
                        <div className="profile-details" key={index}>
                            <Tween from={{ y: "-20px", opacity: 0, delay: 0.4 }}>
                                <div className="image" onClick={() => this.openDoctorProfile(data.link)}>
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="description">
                                    <h1 onClick={() => this.openDoctorProfile(data.link)}>{get(data, "label", "")}</h1>
                                    <p>{get(data, "description", "")} </p>
                                </div>
                            </Tween>
                            <Tween from={{ y: "20px", opacity: 0, delay: 0.8 }}>
                                <div className="button-section">
                                    {data.buttons.map((button, buttonIndex) => (
                                        <button
                                            className={`custom-button ${
                                                isDisabled && button.title !== activeLink ? "disabled-button" : ""
                                            } ${button.title === activeLink ? "activeLink" : ""}`}
                                            key={buttonIndex}
                                            onClick={() =>
                                                this.selectOptions(get(button, "payload", ""), get(button, "title", ""))
                                            }
                                            disabled={isDisabled}
                                        >
                                            {get(button, "title", "")}
                                        </button>
                                    ))}
                                </div>
                            </Tween>
                        </div>
                    ))}
                </div>
            </Tween>
        );
    }
}
