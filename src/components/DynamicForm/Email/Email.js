import React from 'react';
import { Tween } from 'react-gsap';

const Email = (props) => {
    console.log(props.required)
    const { email, isEmailValid } = props.input;

    return (
        <Tween from={{ opacity: 0 }} key={props.index}>
            <div className="email-container left-chat">
                {/* <h1>Email</h1> */}
                <div className="input-section">
                    <Tween from={{ opacity: 0.8 }}>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className={`${isEmailValid ? 'is-invalid' : ''}`}
                            onChange={event => props.handleChange(event, 'email')}
                            placeholder="Email Address"
                            autoComplete="off"
                            required
                        />
                    </Tween>
                </div>
                {/* {isEmailValid ? <p className="text-invalid"> {isEmailValid}</p> : null} */}
            </div>
        </Tween>
    );
};

export default Email;
