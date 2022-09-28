import React, { Component } from "react";

class AutoDirect extends Component {
    componentDidMount() {
        window.open(this.props.chat.data[0].link, "_blank");

        this.props.sendQuickMessage(
            `payment_details:${this.props.chat.data[0].reference}`,
            `Reference ID : ${this.props.chat.data[0].reference}`
        );
    }

    render() {
        return <div className="auto-direct-container"></div>;
    }
}

export default AutoDirect;
