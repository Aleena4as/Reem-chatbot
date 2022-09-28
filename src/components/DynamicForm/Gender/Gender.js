import React from 'react';

const Gender = props => {
    return (
        <div className="gender-container left-chat">
            <h1>{props.label}</h1>
            <select name="gender" onChange={props.handleGender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
    );
};

export default Gender;
