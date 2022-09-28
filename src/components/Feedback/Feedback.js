import React, { useState, useRef } from 'react';
import { Tween } from 'react-gsap';
import { gsap } from 'gsap';

const Feedback = props => {
    const [experiancePayload, setExperiancePayload] = useState('');
    const [experianceTitle, setExperianceTitle] = useState('');
    const [activeSmiley, setActiveSmiley] = useState('');

    const tween = useRef();
    console.log(props);

    const animateFeedBack = () => {
        let newD = tween.current.parentNode.parentNode.parentNode;
        let animation = gsap.timeline();
        animation.to(
            newD,
            {
                duration: 1,
                y: 249,
                opacity: 0,
            },
            0.3
        );

        setTimeout(() => {
            newD.remove();
        }, 1300);
    };
    const selectedExperiance = (payload, title) => {
        setExperiancePayload(payload);
        setExperianceTitle(title);
    };
    const selectFeedback = () => {
        if (experiancePayload && experianceTitle) {
            props.sendQuickMessage(experiancePayload, experianceTitle);
            animateFeedBack();
        }
    };
    const selectNoFeedback = (payload, title) => {
        props.sendQuickMessage(payload, title);
        animateFeedBack();
    };

    const { chat } = props;
    return (
        <Tween from={{ y: '80px', opacity: 0 }}>
            <div className="feedback-container">
                <span className="close-button" onClick={() => selectNoFeedback('/no_rate', '')}>
                    <img src={require('../../public/images/closeFeedback.svg')} alt="" />
                </span>
                <h1>{chat?.text}</h1>
                <div className="image">
                    {chat.quick_replies.map((data, index) => (
                        <div key={index}>
                            <img
                                src={
                                    activeSmiley === index
                                        ? require(`../../public/images/smileys/rate_${data?.image}_active.svg`)
                                        : require(`../../public/images/smileys/rate_${data?.image}.svg`)
                                }
                                onClick={() => {
                                    selectedExperiance(data.payload, data.title);
                                    setActiveSmiley(index);
                                }}
                                ref={tween}
                                alt=""
                            />
                            {/* <p>{data.title}</p> */}
                        </div>
                    ))}
                </div>
                <button className="feedbackSubmit" onClick={() => selectFeedback()}> Submit </button>
            </div>
        </Tween>
    );
};

export default Feedback;
