/* global google */
import React, { Component } from "react";
import { Tween } from "react-gsap";
import { withScriptjs } from "react-google-maps";

class MapsField extends Component {
    state = {
        isDisabled: false
    };

    componentDidMount() {
        this.handleScriptLoadUserLocation();
    }

    /**
     * Loading the Maps Location available on Load
     *
     */
    handleScriptLoadUserLocation() {
        const inputEl = document.querySelector(".input-section #inputField");
        var options = {
            //types: ['address'],
            componentRestrictions: { country: "ae" }
        };
        this.autocompletePick = new google.maps.places.Autocomplete(inputEl, options);
    }

    handlePlaceSelected = () => {
        let result = this.autocompletePick.getPlace();
        this.props.handleSelectedLocation(result);
        this.setState(
            {
                isDisabled: true
            },
            () => {
                this.autocompletePick = "";
            }
        );
    };

    render() {
        const { isDisabled } = this.state;

        return (
            <Tween from={{ y: "20px", opacity: 0 }} key={this.props.keys}>
                <div className="maps-field-container left-chat">
                    <div className="input-section">
                        <Tween from={{ opacity: 0.8, delay: 0.5 }}>
                            {!isDisabled ? (
                                <input
                                    id="inputField"
                                    type="text"
                                    value={this.props.userLocation}
                                    name="userLocation"
                                    placeholder="Type your location"
                                    onChange={this.props.handleChangeUserLocation}
                                />
                            ) : (
                                <input type="text" className="disabled-input" />
                            )}
                        </Tween>
                        <Tween from={{ opacity: 0.5, delay: 0.8 }}>
                            <button
                                className={`btn-100 ${isDisabled ? "disabled-button" : ""}`}
                                onClick={this.handlePlaceSelected}
                                disabled={isDisabled}
                            >
                                Submit
                            </button>
                        </Tween>
                    </div>
                </div>
            </Tween>
        );
    }
}

export default withScriptjs(props => <MapsField {...props} />);
