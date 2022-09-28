import React from 'react';
import get from 'lodash.get';
import { Tween } from 'react-gsap';
import Button from '../../Button/Button';
import { TranslateContext } from '../../../context/Translate/TranslateContext';

export default class Otp extends React.PureComponent {
    static contextType = TranslateContext;
    constructor(props) {
        super(props);
        this.state = {
            showTick: false,
            disableInput: false,
            language: '',
        };
    }

    addClass = () => {
        let otpOne = document.getElementById('otpOne');
        let otpTwo = document.getElementById('otpTwo');
        let otpThree = document.getElementById('otpThree');
        let otpFour = document.getElementById('otpFour');
        const OTP = otpOne.value + otpTwo.value + otpThree.value + otpFour.value;
        this.setState({
            showTick: true,
        });

        let submit_button = this.submitButton.parentNode;
        submit_button.classList.add('animate');

        this.setState({
            disableInput: true,
        });

        this.props.sendQuickMessage(`/submit_otp{"otp_code": "${OTP}"}`, '', this.props.type);
    };

    handleChange = (event, inputField) => {
        let otpOne = document.getElementById('otpOne');
        let otpTwo = document.getElementById('otpTwo');
        let otpThree = document.getElementById('otpThree');
        let otpFour = document.getElementById('otpFour');
        console.log(otpOne.value);
        let keycode = event.which;
        if (
            !(
                event.shiftKey === false &&
                (keycode === 46 ||
                    keycode === 8 ||
                    keycode === 37 ||
                    keycode === 39 ||
                    (keycode >= 48 && keycode <= 57))
            )
        ) {
            if (otpOne.value.length >= 1) {
                otpTwo.focus();
            }
            if (otpTwo.value.length >= 1) {
                otpThree.focus();
            }
            if (otpThree.value.length >= 1) {
                otpFour.focus();
            }
        }

        this.props.handleChange(event, inputField);
    };

    /**
     * For backspace
     *
     */
    handleDown = event => {
        let otpOne = document.getElementById('otpOne');
        let otpTwo = document.getElementById('otpTwo');
        let otpThree = document.getElementById('otpThree');
        let otpFour = document.getElementById('otpFour');

        if (otpTwo.value.length < 1 && event.keyCode === 8) {
            otpOne.focus();
        } else if (otpThree.value.length < 1 && event.keyCode === 8) {
            otpTwo.focus();
        } else if (otpFour.value.length < 1 && event.keyCode === 8) {
            otpThree.focus();
        }
    };
    componentDidMount() {
        this.translatedContent = this.context;
        this.setState({
            language: this.translatedContent.language,
        });
    }
    render() {
        const { input } = this.props;
        const { otpFieldOne, otpFieldTwo, otpFieldThree, otpFieldFour } = this.props.input;

        let allInputs = [
            {
                id: 'otpOne',
                value: get(input, otpFieldOne, ''),
                inputField: 'otpFieldOne',
                delay: 0.2,
                autoFocus: true,
            },
            {
                id: 'otpTwo',
                value: get(input, 'otpFieldTwo', ''),
                inputField: 'otpFieldTwo',
                delay: 0.6,
            },
            {
                id: 'otpThree',
                value: get(input, 'otpFieldThree', ''),
                inputField: 'otpFieldThree',
                delay: 0.8,
            },
            {
                id: 'otpFour',
                value: get(input, 'otpFieldFour', ''),
                inputField: 'otpFieldFour',
                delay: 1,
            },
        ];

        const disabledButton =
            otpFieldOne === '' || otpFieldTwo === '' || otpFieldThree === '' || otpFieldFour === '' ? true : false;

        return (
            <Tween from={{ y: '20px', opacity: 0 }}>
                <div className="otp-container">
                    {!this.state.disableInput ? (
                        <>
                            <h1>{this.state.language === 'en' ? 'OTP VERIFICATION' : 'التحقق من OTP'}</h1>
                            <div className="input-fields" ref={input => (this.submitInput = input)}>
                                {allInputs.map((data, index) => (
                                    <Tween from={{ scale: 0.5, opacity: 0, delay: data.delay }} key={index}>
                                        <input
                                            type="text"
                                            id={data.id}
                                            maxLength="1"
                                            autoComplete="off"
                                            value={data.value.value}
                                            onChange={event => this.handleChange(event, data.inputField)}
                                            onKeyDown={this.handleDown}
                                            disabled={this.state.disableInput}
                                        />
                                    </Tween>
                                ))}
                            </div>
                            <Tween from={{ css: { width: '0', padding: 0, delay: 0.5 } }}>
                                <Button
                                    className="custom-button"
                                    id="testTest"
                                    onClick={this.addClass}
                                    disabled={disabledButton}
                                >
                                    {!this.state.showTick && (
                                        <span ref={input => (this.submitButton = input)}>{this.state.language === 'en' ? 'Verify' : 'تأكيد'}</span>
                                    )}
                                </Button>
                            </Tween>
                        </>
                    ) : (
                        <div className="otpSuccessPanel">
                            <div className="image">
                                <img src={require(`../../../public/images/otpSuccesIcon.webp`)} alt="" />
                            </div>
                            <p className="successMainText">{this.state.language === 'en' ? 'Thank you' : 'شكرا '}</p>
                            <p className="successSubText">
                                {this.state.language === 'en'
                                    ? 'Your OTP has been verified.'
                                    : 'تم تأكيد رمز التحقق الخاص بك '}
                            </p>
                        </div>
                    )}
                </div>
            </Tween>
        );
    }
}
