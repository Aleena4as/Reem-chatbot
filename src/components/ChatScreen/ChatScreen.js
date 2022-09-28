import React, { useState } from 'react';
import { floor } from '../../utils/Function';

import { Environment } from '../../env';
import { generateGuid } from '../../utils/Function';
import get from 'lodash.get';
import debounce from 'lodash.debounce';
import { Tween } from 'react-gsap';
import BotHandler from '../BotHandler';
import UserReply from './UserReply';
import TextBox from '../TextBox';
import Typing from '../Typing/Typing';
import MainMenu from '../MainMenu';
import Header from '../Header';
import { TranslateContext } from '../../context/Translate/TranslateContext';
import BotReply from './BotReply/BotReply';
import Feedback from '../Feedback/Feedback';

class ChatScreen extends React.PureComponent {
    static contextType = TranslateContext;
    constructor(props) {
        super(props);

        this.state = {
            user: generateGuid(),
            websocket: new WebSocket(Environment.socketUrl),
            input_disable: 'false',
            input: '',
            currentSelectedValue: '',
            dataLogs: [],
            bot_typing: false,
            showMainMenu: false,
            submitButtonDisabled: false,
            // Auto Suggest
            autosuggest: '',
            // Date
            dateDay: '',
            dateMonth: '',
            dateYear: '2020',
            date: new Date(),
            dayArray: [],
            monthArray: [],
            yearArray: [],
            // Map User Location
            userLocation: '',
            language: '',
        };
        //Initial Message being sent to the Socket
        this.greeting_msg = Environment.startBotEng;

        this.clearRestart = null;
        this.resetChatSession = debounce(this.resetChatSession.bind(this), 500);
        this.sendQuickMessage = debounce(this.sendQuickMessage.bind(this), 500);
        this.resetMainMenu = debounce(this.resetMainMenu.bind(this), 500);
    }

    /**
     * Inital Load of the Screen
     *
     * @param {*} event
     *
     */
    componentDidMount() {
        this.setupWebsocket();
        this.translatedContent = this.context;
        this.setState({
            language: this.translatedContent.language,
        });
    }

    /**
     * Settingup webSocket on Load of the ChatScreen
     *
     * @param {*} event
     */
    setupWebsocket = () => {
        const { websocket, user } = this.state;
        const { payLoad, showPayLoad } = this.props;
        let device;
        if (window.screen.width <= '576') {
            device = 'Mobile';
        } else {
            device = 'Desktop';
        }

        websocket.onopen = () => {
            websocket.send(
                JSON.stringify({
                    type: 'message',
                    text: showPayLoad ? payLoad : this.greeting_msg,
                    user,
                    device: device,
                    channel: 'socket',
                })
            );
        };

        /**
         * On Receiving Bots Message
         *
         */
        websocket.onmessage = event => {
            let parsedData = JSON.parse(event.data);

            if (get(parsedData, 'type', '') === 'restart_session') {
                this.resetChatSession();
            }
            if (get(parsedData, 'type', '') === 'verification') {
                websocket.send(
                    JSON.stringify({
                        type: 'message',
                        text: parsedData.text,
                        user,
                        channel: 'socket',
                    })
                );
            }
            if (get(parsedData, 'type', '') === 'end_session') {
                this.setState({
                    bot_typing: true,
                });
                this.webSocketClose();
                this.props.closeChatBot();
            }

            if (get(parsedData, 'type', '') !== 'typing') {
                this.setState({
                    dataLogs: [...this.state.dataLogs, JSON.parse(event.data)],
                    bot_typing: false,
                    input_disable: get(parsedData, 'input_disable', 'false'),
                });
                if (get(parsedData, 'type', '') !== 'daynamic_form') {
                    if (get(parsedData, 'type', '') === 'message' || get(parsedData, 'type', '') == 'message') {
                        if (
                            parsedData.scroll === false ||
                            parsedData.text === 'Let me know your details below so we can plan it with you.' ||
                            parsedData.text === "Great choice. You'll love this test drive 😊"
                        ) {
                            // $('.bot-reply-container').last()[0].scrollIntoView();
                        } else {
                            this.scrollToBottom();
                        }
                    } else {
                        this.scrollToBottom();
                    }
                    //this.scrollToBottom();
                } else {
                    let lastElement = document.querySelectorAll('.bot-reply-container');
                    lastElement[lastElement.length - 1].scrollIntoView();
                }
            } else {
                this.scrollToBottom();
                this.setState({
                    bot_typing: true,
                });
            }
        };
    };

    /**
     * Triggers on Close of a Web Socket
     *
     */
    webSocketClose() {
        const { websocket } = this.state;
        websocket.close();
    }

    /**
     * Restart Chatbot onTimeout
     */

    restartBotOnTimeOut = payload => {
        document.querySelector('.chat-section').innerHTML = '';
        this.setState(
            {
                websocket: new WebSocket(Environment.socketUrl),
            },
            () => {
                this.setupWebsocket();
            }
        );
    };

    /**
     * End Session
     *
     */

    endSessionToProps = () => {
        this.props.endChatSession();
        this.webSocketClose();
    };

    handleDate = date => {
        this.setState({
            date,
        });
    };

    /* generate of user id end */

    /**
     * Handle Change for Input TextBox.js
     *
     * @param event
     */
    handleChange = (event, field) => {
        let fieldVal = event.target.value;

        switch (field) {
            // Input Button
            case 'input': {
                this.setState({
                    input: fieldVal,
                });
                break;
            }
            default: {
                break;
            }
        }
    };

    /**
     * Handling the Typed User Location
     *
     * @param event
     *
     */
    handleChangeUserLocation = event => {
        this.setState({
            userLocation: event.target.value,
        });
    };

    /**
     * Handling the Selected user Location
     *
     */

    handleSelectedLocation = result => {
        let coordinates = {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
        };
        this.setState({
            userLocation: result.name + ' - ' + result.formatted_address,
        });

        this.sendMessageToBot(`/select_location{"lat":${coordinates.lat},"lng":${coordinates.lng}}`);
    };

    /**
     * Sending Messge onClick from  TextBox.js
     *
     */
    sendMessage = (message = '') => {
        const { user, input } = this.state;

        if (input !== '' && input.replace(/  /g, '') !== null) {
            this.setState({
                dataLogs: [...this.state.dataLogs, { is_received: false, text: this.state.input }],
            });
            const { websocket } = this.state;
            websocket.send(
                JSON.stringify({
                    type: 'message',
                    text: input,
                    user,
                    channel: 'socket',
                })
            );

            this.scrollToBottom();
            this.resetTextBox();
        }
    };

    /**
     * Send Message on Enter
     *
     */
    sendMessageOnEnter = e => {
        e.persist();
        this.setState({ input: e.target.value });
        if (e.key === 'Enter' && e.target.value !== '' && !e.target.value.match(/^\s+$/)) {
            this.sendMessage(e.target.value);
            this.scrollToBottom();
            this.resetTextBox();
        }
    };

    /**
     * Send Message to bot onClick without typing with Params but does not save data in the array
     *
     *  Example: Quick Replies button
     *
     *  @param message
     */
    sendMessageToBot(message) {
        const { websocket, user } = this.state;
        websocket.send(
            JSON.stringify({
                type: 'message',
                text: message,
                user,
                channel: 'socket',
            })
        );
        this.scrollToBottom();
        this.resetTextBox();
    }

    /**
     * SendMessge on Click Of Quick Button with params and storing that data to the datalogs array
     *
     * And Displaying it on the Screeen
     *
     *
     */
    sendQuickMessage = (selectedValue, label, type) => {
        const { user, websocket, currentSelectedValue } = this.state;
        clearInterval(this.clearRestart);
        if (currentSelectedValue === selectedValue) {
            return;
        }

        this.setState(
            {
                dataLogs: [...this.state.dataLogs, { is_received: false, text: label }],
                currentSelectedValue: selectedValue,
            },
            () => {
                if (selectedValue.includes('language_selection')) {
                    document.querySelector('.chat-section').innerHTML = '';
                }
                websocket.send(
                    JSON.stringify({
                        type: 'message',
                        text: selectedValue,
                        user,
                        channel: 'socket',
                    })
                );

                this.scrollToBottom();
                this.resetTextBox();
            }
        );
    };

    /**
     * All Form Submit
     *
     */
    sendFormSubmit = (selectedValue, label, type, currentSubmittedValue) => {
        const { user, websocket, currentSelectedValue } = this.state;

        if (currentSelectedValue === currentSubmittedValue) {
            return;
        }

        this.setState({
            currentSelectedValue: currentSubmittedValue,
        });

        this.setState({
            dataLogs: [...this.state.dataLogs, { is_received: false, text: label }],
        });
        websocket.send(
            JSON.stringify({
                type: 'message',
                text: selectedValue,
                user,
                channel: 'socket',
            })
        );

        this.scrollToBottom();
        this.resetTextBox();
    };

    /**
     * Scroll To Bottom
     *
     */
    scrollToBottom = () => {
        let shoppingListContainer = document.querySelector('.chatscreen-container .chat-section');
        setTimeout(() => {
            if (shoppingListContainer !== null) {
                shoppingListContainer.scrollTop =
                    shoppingListContainer.scrollHeight - shoppingListContainer.clientHeight;
            }
        }, 10);
    };

    /**
     * Reset All TextBox
     *
     */
    resetTextBox = event => {
        this.setState({
            input: '',
            autosuggest: '',
            date: '',
            userLocation: '',
        });
    };

    /**
     * Displays the Entire Chat History
     *
     * Checks if there is is_received attribute , if true then it will display BotHandle
     * If false then it will show UserReply
     *
     * @param chat
     * @param {index} i
     *
     */
    generateChatHistory = (chat, i) => {
        if (get(chat, 'is_received', true) === true && chat.text !== '') {
            return (
                <BotHandler
                    keys={i}
                    chat={chat}
                    {...this.state}
                    handleChange={this.handleChange}
                    // QuickReply
                    sendQuickMessage={this.sendQuickMessage}
                    sendFormSubmit={this.sendFormSubmit}
                    // User Location HandleChange
                    handleChangeUserLocation={this.handleChangeUserLocation}
                    handleSelectedLocation={this.handleSelectedLocation}
                    // Handle Date
                    handleDate={this.handleDate}
                    // Scroll To Bottom
                    scrollToBottom={this.scrollToBottom}
                    // HandleGender
                    handleGender={this.handleGender}
                    // HandleOpt
                    handleOpt={this.handleOpt}
                    restartBotOnTimeOut={this.restartBotOnTimeOut}
                />
            );
        } else {
            if (chat.text !== '') {
                return <UserReply chat={chat} />;
            }
        }
    };

    /**
     * Shows Main Menu
     *
     */

    mainMenu = () => {
        this.setState({
            showMainMenu: !this.state.showMainMenu,
        });
    };

    /**
     * Reset Chat Session on Click in MainMenu
     *
     */

    resetChatSession() {
        const chat_section = document.querySelector('.chat-section');
        chat_section.innerHTML = '';

        this.sendMessageToBot('/restart');
        // this.setState(
        //     {
        //         dataLogs: [...this.state.dataLogs, { is_received: true, text: 'Bot is restarting...' }],
        //     },
        //     () => {
        this.sendMessageToBot(this.context?.language === 'en' ? Environment.startBotEng : Environment.startBotAr);
        // this.setState({
        //     dataLogs: [...this.state.dataLogs].filter(data => data.text !== 'Bot is restarting...'),
        // });
        // }
        // );

        this.resetTextBox();
    }

    /**
     * Reset Main Menu
     *
     */

    resetMainMenu = () => {
        this.sendMessageToBot('/main_menu');
    };

    openAgentLive = () => {
        this.sendMessageToBot('/live_agent');
    };
    closeAgentLive = () => {
        this.sendMessageToBot('/live_agent_close');
    };
    componentWillUnmount() {
        this.webSocketClose();
    }

    render() {
        const { bot_typing } = this.state;
        const Lol = new Object();

        return (
            <div className="chatscreen-container">
                <Tween from={{ y: '-100px', opacity: 0 }}>
                    <Header closeAgentLive={this.closeAgentLive} />
                    {/* <Header endSessionToProps={this.endSessionToProps} /> */}
                </Tween>
                <div className="chat-section">
                    {this.state.dataLogs.map((chat, i) => (
                        <React.Fragment key={i}>{this.generateChatHistory(chat, i)}</React.Fragment>
                    ))}
                </div>

                {bot_typing && <Typing />}

                <TextBox
                    input={this.state.input}
                    handleChange={this.handleChange}
                    sendMessage={this.sendMessage}
                    sendMessageOnEnter={this.sendMessageOnEnter}
                    input_disable={this.state.input_disable}
                    mainMenu={this.mainMenu}
                    resetMainMenu={this.resetMainMenu}
                    resetChatSession={this.resetChatSession}
                    sendQuickMessage={this.sendQuickMessage}
                    openAgentLive={this.openAgentLive}
                />

                {/* <MainMenu
                    mainMenu={this.mainMenu}
                    resetMainMenu={this.resetMainMenu}
                    resetChatSession={this.resetChatSession}
                    sendQuickMessage={this.sendQuickMessage}
                />

                <Tween from={{ y: '50px', delay: 0.3 }}>
                    <a
                        href="https://bluelogic.ai/"
                        target="_blank"
                        className={`powered-by ${this.context?.language === 'ar' ? 'right-align' : ''}`}
                    >
                        <img src="svgIcons/Powered.svg" alt="" />
                    </a>
                </Tween> */}
            </div>
        );
    }
}

export default ChatScreen;
