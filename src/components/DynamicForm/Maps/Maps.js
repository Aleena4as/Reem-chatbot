/* global google */
import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
// import mayStyle from "./mapStyle";
import Header from "../../Header/Header";
import { Tween } from "react-gsap";

class Maps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawLine: [],
            distance: null
        };

        this.mapHeader = React.createRef();
    }

    componentDidMount() {
        this.drawLine();
    }

    drawLine() {
        let coordinatesFrom = {
            lat: this.props.coordinates.data[0].from.lat,
            lng: this.props.coordinates.data[0].from.lng
        };
        let coordinatesTo = {
            lat: parseFloat(this.props.coordinates.data[0].to.lat),
            lng: parseFloat(this.props.coordinates.data[0].to.lng)
        };

        // Getting the Path of the Direction
        const DirectionsService = new google.maps.DirectionsService();
        DirectionsService.route(
            {
                origin: new google.maps.LatLng(coordinatesFrom.lat, coordinatesFrom.lng),
                destination: new google.maps.LatLng(coordinatesTo.lat, coordinatesTo.lng),
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                this.setState({
                    distance: result.routes[0].legs[0].distance.value
                });
                if (status === google.maps.DirectionsStatus.OK) {
                    const drawLine = [];
                    result.routes[0].overview_path.forEach(data => {
                        drawLine.push({
                            lat: data.lat(),
                            lng: data.lng()
                        });
                    });

                    this.setState({
                        drawLine: drawLine
                    });
                }
            }
        );
    }

    /**
     * Hide Maps on click of the Back Button
     *
     */

    hideMaps = () => {
        const maps_container = this.mapHeader.current.parentNode;
        const maps = this.mapHeader.current.parentNode.parentNode.parentNode;

        maps_container.style.display = "none";
        maps.style.display = "none";
    };

    /**
     * Opening Maps when Clickde on  Direction
     *
     */
    redirectToMaps = () => {
        let coordinatesFrom = {
            lat: this.props.coordinates.data[0].from.lat,
            lng: this.props.coordinates.data[0].from.lng
        };
        let coordinatesTo = {
            lat: parseFloat(this.props.coordinates.data[0].to.lat),
            lng: parseFloat(this.props.coordinates.data[0].to.lng)
        };
        const url = `https://www.google.com/maps/dir/${coordinatesFrom.lat},${coordinatesFrom.lng}/${coordinatesTo.lat},${coordinatesTo.lng}/`;
        let open = window.open(url);
        if (open === null || typeof open == "undefined") {
            alert(
                "We attempted to launch direction map in a new window, but a popup blocker is preventing it from opening. Please disable popup blockers."
            );
        }
    };
    render() {
        let coordinatesFrom = {
            lat: this.props.coordinates.data[0].from.lat,
            lng: this.props.coordinates.data[0].from.lng
        };
        let coordinatesTo = {
            lat: parseFloat(this.props.coordinates.data[0].to.lat),
            lng: parseFloat(this.props.coordinates.data[0].to.lng)
        };

        const { distance, drawLine } = this.state;

        return (
            <div className="maps-container">
                <div onClick={this.hideMaps} ref={this.mapHeader}>
                    <Header />
                </div>
                <Tween from={{ y: "80px", opacity: 0, delay: 0.2 }}>
                    <GoogleMap
                        defaultCenter={{
                            lat: coordinatesFrom.lat,
                            lng: coordinatesFrom.lng
                        }}
                        center={{
                            lat: coordinatesFrom.lat,
                            lng: coordinatesFrom.lng
                        }}
                        defaultZoom={distance > 10000 ? 7 : distance > 30000 ? 6 : 8}
                        defaultOptions={{
                            streetViewControl: false,
                            zoomViewControl: true,
                            disableDefaultUI: true,
                            drawingControl: true
                        }}
                    >
                        {/* PickUp Location Marker */}
                        <Marker
                            draggable={false}
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                scaledSize: { width: 45, height: 45 }
                            }}
                            position={{ lat: coordinatesFrom.lat, lng: coordinatesFrom.lng }}
                        />
                        {/* Drop Location Marker */}
                        <Marker
                            draggable={false}
                            position={{ lat: coordinatesTo.lat, lng: coordinatesTo.lng }}
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                                scaledSize: { width: 45, height: 45 }
                            }}
                        />
                        <Polyline
                            geodesic={true}
                            options={{
                                path: drawLine,
                                strokeColor: "dodgerblue",
                                strokeOpacity: 0.7,
                                strokeWeight: 6
                            }}
                        />
                    </GoogleMap>
                    <div className="footer">
                        <div className="left-section">
                            <h1>{this.props.coordinates.data[0].location_name}</h1>
                            <p>{this.props.coordinates.data[0].description}</p>
                        </div>
                        <div className="right-section">
                            <a className="custom-button" href="tel:+9714276 6064">
                                <img src={require("../../../public/images/phone.svg")} alt="" />
                                Call
                            </a>
                            <button className="custom-button" id="get-direction" onClick={this.redirectToMaps}>
                                <img src={require("../../../public/images/direction.svg")} alt="" />
                                Direction
                            </button>
                        </div>
                    </div>
                </Tween>
            </div>
        );
    }
}

export default withScriptjs(withGoogleMap(props => <Maps {...props} />));
