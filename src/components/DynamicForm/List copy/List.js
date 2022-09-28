import React, { Component } from 'react';
import { Tween } from 'react-gsap';
export default class List extends Component {
    state = {
        isDisabled: false,
        activeLink: null,
    };

    /**
     * Selecting the Categories
     *
     */
    selectCategories = (event, payload, label) => {
        const { isDisabled } = this.state;
        this.setState(
            {
                isDisabled: true,
                activeLink: label,
            },
            () => {
                if (!isDisabled) {
                    this.props.sendQuickMessage(payload, label);
                } else {
                    event.stopPropagation();
                }
            }
        );
    };

    render() {
        const { activeLink, isDisabled } = this.state;
        return (
            <Tween from={{ x: '-35px', opacity: 0 }}>
                <div className="list-container">
                    <div className="items-section">
                        {this.props.items.data.map((data, index) => (
                            <button
                                className={`items ${isDisabled && data.label !== activeLink ? 'disabled-button' : ''} ${
                                    data.label === activeLink ? 'activeLink' : ''
                                }`}
                                key={index}
                                onClick={event => this.selectCategories(event, data.buttons[0].payload, data.label)}
                                disabled={isDisabled}
                            >
                                <img src={require(`../../../public/images/Doctor.svg`)} alt="" />
                                <div className="names">
                                    <h2>{data.label}</h2>
                                    <p>{data.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </Tween>
        );
    }
}
