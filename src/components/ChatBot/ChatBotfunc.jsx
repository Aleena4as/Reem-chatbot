/**
* Inital Load of the Screen
*
* @param {*} event
* 
*/
 useEffect(() => {
    // Here goes the code you wish to run on mount
    setupWebsocket();
    dateDropDown();
    return () => {
      // Here goes the code you wish to run on unmount
        webSocketClose();
        console.log('Closed Connection');
    }
}, []);
      
const [user, setuser] = useState(generateGuid());
const websocket = new WebSocket(Environment.socketUrl);
const [dayArray, setdayArray] = useState([]);
const [monthArray, setmonthArray] = useState([]);
const [yearArray, setyearArray] = useState([]);
const [bot_typing, setbot_typing] = useState(false);
const [dataLogs, setdataLogs] = useState([]);
const [input_disable, setinput_disable] = useState('false');
const [input, setinput] = useState('');
const [currentSelectedValue, setcurrentSelectedValue] = useState('');
const [showMainMenu, setshowMainMenu] = useState(false);
const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);
// Map User Location
const [userLocation, setuserLocation] = useState('');
// Auto Suggest
const [autosuggest, setautosuggest] = useState('');
// Date
const [date, setdate] = useState(new Date());

        //Initial Message being sent to the Socket
        const greeting_msg =  Environment.startBotEng ;

        clearRestart = null;
        this.resetChatSession = debounce(this.resetChatSession.bind(this), 500);
        this.sendQuickMessage = debounce(this.sendQuickMessage.bind(this), 500);
        this.resetMainMenu = debounce(this.resetMainMenu.bind(this), 500);
    


    
    /**
     * Date DropDown Dynamic Values
     *
     */
    const dateDropDown = () => {
        const newDay = [];
        const newMonth = [];
        const newYear = [];
        const dayCount = 31;
        const monthCount = 12;
        const yearCount = 2020;
        for (let i = 1; i <= dayCount; i++) {
            if (i >= 1 && i < 10) {
                newDay.push(`0${i}`);
            } else {
                newDay.push(i);
            }
        }
        for (let i = 1; i <= monthCount; i++) {
            if (i >= 1 && i < 10) {
                newMonth.push(`0${i}`);
            } else {
                newMonth.push(i);
            }
        }
        for (let i = 1940; i <= yearCount; i++) {
            newYear.push(i);
        }
        
            setdayArray(newDay);
            setmonthArray(newMonth);
            setyearArray(newYear);
        
    };

    /**
     * Settingup webSocket on Load of the ChatScreen
     *
     * @param {*} event
     */
    const setupWebsocket = () => {
        const websocket, user;
        const payLoad, showPayLoad;
        let device;
        if (window.screen.width <= '576') {
            device = 'Mobile';
        } else {
            device = 'Desktop';
            console.log("Device checked")
        }

        websocket.onopen = () => {
            console.log("message sending")
            websocket.send(
                JSON.stringify({
                    type: 'message',
                    text:  greeting_msg,
                    user,
                    device: device,
                    channel: 'socket',
                })
            );
        };console.log("message sending over")

        /**
         * On Receiving Bots Message
         *
         */
        websocket.onmessage = event => {

            let parsedData = JSON.parse(event.data);
            console.log(event.data);
            if (get(parsedData, 'type', '') === 'restart_session') {
                resetChatSession();
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
                setbot_typing(true);
                webSocketClose();
                closeChatBot();
            }

            if (get(parsedData, 'type', '') !== 'typing') {
               
                    setdataLogs([...dataLogs, JSON.parse(event.data)]);
                    setbot_typing(false);
                    setinput_disable(get(parsedData, 'input_disable', 'false'));
                    console.log(dataLogs);
                if (get(parsedData, 'type', '') != 'daynamic_form') {
                    if (get(parsedData, 'type', '') == 'message' || get(parsedData, 'type', '') == 'message') {
                        if (
                            parsedData.scroll == false ||
                            parsedData.text == 'Let me know your details below so we can plan it with you.' ||
                            parsedData.text == "Great choice. You'll love this test drive 😊"
                        ) {
                            // $('.bot-reply-container').last()[0].scrollIntoView();
                        } else {
                            scrollToBottom();
                        }
                    } else {
                        scrollToBottom();
                    }
                    //this.scrollToBottom();
                } else {
                    let lastElement = document.querySelectorAll('.bot-reply-container');
                    lastElement[lastElement.length - 1].scrollIntoView();
                }
            } else {
                scrollToBottom();
                setbot_typing(true);
                
            }
        };
    };

    /**
     * Triggers on Close of a Web Socket
     *
     */
    const webSocketClose = () => {
        websocket.close();
    }

    /**
     * Restart Chatbot onTimeout
     */

    const restartBotOnTimeOut = payload => {
        document.querySelector('.chat-section').innerHTML = '';
        websocket = new WebSocket(Environment.socketUrl);
        setupWebsocket();
    };

    /**
     * End Session
     *
     */

    const endSessionToProps = () => {
        endChatSession();
        webSocketClose();
    };

    const handleDate = date => {
            setdate
    };

    /* generate of user id end */

    /**
     * Handle Change for Input TextBox.js
     *
     * @param event
     */
    const handleChange = (event, field) => {
        let fieldVal = event.target.value;
        switch (field) {
            // Input Button
            case 'input': {
                    setinput(fieldVal);
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
    const handleChangeUserLocation = event => {
        this.setState({
            userLocation: event.target.value,
        });
    };

    /**
     * Handling the Selected user Location
     *
     */

    const handleSelectedLocation = result => {
        let coordinates = {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
        };
            userLocation(result.name + ' - ' + result.formatted_address);
        sendMessageToBot(`/select_location{"lat":${coordinates.lat},"lng":${coordinates.lng}}`);
    };

    /**
     * Sending Messge onClick from  TextBox.js
     *
     */
    const sendMessage = (message = '') => {
        const user, input;

        if (input !== '' && input.replace(/  /g, '') !== null) {
            dataLogs([...dataLogs, { is_received: false, text: input }]);
            const websocket;
            websocket.send(
                JSON.stringify({
                    type: 'message',
                    text: input,
                    user,
                    channel: 'socket',
                })
            );

            scrollToBottom();
            resetTextBox();
        }
    };

    /**
     * Send Message on Enter
     *
     */
    const sendMessageOnEnter = e => {
        e.persist();
        setinput(e.target.value);
        if (e.key === 'Enter' && e.target.value !== '' && !e.target.value.match(/^\s+$/)) {
            sendMessage(e.target.value);
            scrollToBottom();
            resetTextBox();
        }
    };

    /**
     * Send Message to bot onClick without typing with Params but does not save data in the array
     *
     *  Example: Quick Replies button
     *
     *  @param message
     */
    const sendMessageToBot = (message) => {
        const websocket, user;
        websocket.send(
            JSON.stringify({
                type: 'message',
                text: message,
                user,
                channel: 'socket',
            })
        );
        scrollToBottom();
        resetTextBox();
    }

    /**
     * SendMessge on Click Of Quick Button with params and storing that data to the datalogs array
     *
     * And Displaying it on the Screeen
     *
     *
     */
    const sendQuickMessage = (selectedValue, label, type) => {
        const user, websocket, currentSelectedValue;
        clearInterval(clearRestart);
        if (currentSelectedValue === selectedValue) {
            return;
        }
            setdataLogs([...this.state.dataLogs, { is_received: false, text: label }]);
            currentSelectedValue(selectedValue);

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
            scrollToBottom();
            resetTextBox();
            }
    

    /**
     * All Form Submit
     *
     */
    const sendFormSubmit = (selectedValue, label, type, currentSubmittedValue) => {
        const user, websocket, currentSelectedValue;

        if (currentSelectedValue === currentSubmittedValue) {
            return;
        }

        setcurrentSelectedValue(currentSubmittedValue);
        setdataLogs([...this.state.dataLogs, { is_received: false, text: label }]);
        websocket.send(
            JSON.stringify({
                type: 'message',
                text: selectedValue,
                user,
                channel: 'socket',
            })
        );
        scrollToBottom();
        resetTextBox();
    };

    /**
     * Scroll To Bottom
     *
     */
    const scrollToBottom = () => {
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
    const resetTextBox = (event) => {
            setinput('');
            setautosuggest('');
            setdate('');
            setuserLocation('')
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
                    handleChange={handleChange}
                    // QuickReply
                    sendQuickMessage={sendQuickMessage}
                    sendFormSubmit={sendFormSubmit}
                    // User Location HandleChange
                    handleChangeUserLocation={handleChangeUserLocation}
                    handleSelectedLocation={handleSelectedLocation}
                    // Handle Date
                    handleDate={handleDate}
                    // Scroll To Bottom
                    scrollToBottom={scrollToBottom}
                    // HandleGender
                    handleGender={handleGender}
                    // HandleOpt
                    handleOpt={handleOpt}
                    restartBotOnTimeOut={restartBotOnTimeOut}
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

    const mainMenu = () => {
            setshowMainMenu(!showMainMenu);
    };

    /**
     * Reset Chat Session on Click in MainMenu
     *
     */

    const resetChatSession=()=> {
        const chat_section = document.querySelector('.chat-section');
        chat_section.innerHTML = '';

        sendMessageToBot('/restart');
        // this.setState(
        //     {
        //         dataLogs: [...this.state.dataLogs, { is_received: true, text: 'Bot is restarting...' }],
        //     },
        //     () => {
        sendMessageToBot(this.context?.language === 'en' ? Environment.startBotEng : Environment.startBotAr);
        // this.setState({
        //     dataLogs: [...this.state.dataLogs].filter(data => data.text !== 'Bot is restarting...'),
        // });
        // }
        // );

        resetTextBox();
    }

    /**
     * Reset Main Menu
     *
     */

    const resetMainMenu = () => {
        sendMessageToBot('/main_menu');
    };

   
