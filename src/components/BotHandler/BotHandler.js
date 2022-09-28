import React from 'react';
// Components
import BotReply from '../ChatScreen/BotReply';
import Carousel from '../Carousel';
import QuickButtons from '../DynamicForm/QuickButtons/QuickButtons';
import TimeSlot from '../DynamicForm/TimeSlot/TimeSlot';

import Otp from '../DynamicForm/OTP/Otp';
import List from '../DynamicForm/List/List';
import ButtonIcon from '../DynamicForm/ButtonIcon/ButtonIcon';
import DynamicForm from '../DynamicForm/DynamicForm';
import AutoSuggest from '../DynamicForm/AutoSuggest/AutoSuggest';
import MapsField from '../DynamicForm/Maps/MapsField/MapsField';
import Maps from '../DynamicForm/Maps/Maps';
import Feedback from '../Feedback/Feedback';
import Profile from '../Profile/Profile';
import AutoDirect from '../AutoDirect/AutoDirect';
import ModalPopup from '../ModalPopup/ModalPopup';
import CardCarousel from '../CardCarousel/CardCarousel';
import { textToLink } from '../../utils/Function';
export default props => {
    const { type = '', feedback = 'false', quick_replies = false, location = '', link = '', text = '' } = props.chat;

    const googleMapURL =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyATMJCJoBvcmVYKU6GMtckJgmS7ztPqhlU&v=3.exp&libraries=places&region=ae&avoid=tolls';

 
    if (link && quick_replies && type === 'message' && feedback === 'false') {
        return (
            <QuickButtons
                chat={props.chat}
                sendQuickMessage={props.sendQuickMessage}
                link={link}
                restartBotOnTimeOut={props.restartBotOnTimeOut}
            />
        );
    }
    if (quick_replies && type === 'message' && feedback === 'false') {
        return (
            <QuickButtons
                chat={props.chat}
                sendQuickMessage={props.sendQuickMessage}
                restartBotOnTimeOut={props.restartBotOnTimeOut}
            />
        );
    }
    if (type === 'time_slots') {
        return (
            <TimeSlot
                chat={props.chat}
                sendQuickMessage={props.sendQuickMessage}
                restartBotOnTimeOut={props.restartBotOnTimeOut}
            />
        );
    }

    if (type === 'dynamic_form') {
        return (
            <DynamicForm
                chat={props.chat}
                input={props}
                handleChange={props.handleChange}
                sendQuickMessage={props.sendQuickMessage}
                handleDate={props.handleDate}
                handleGender={props.handleGender}
                handleOpt={props.handleOpt}
                sendFormSubmit={props.sendFormSubmit}
            />
        );
    }

    if (type === 'main_options') {
        return <Carousel type={type} chat={props.chat} sendQuickMessage={props.sendQuickMessage} />;
    }

    if (type === 'show_profile' || type === 'service_type_carousel' || type === 'service_location_carousel') {
        return <CardCarousel type={type} chat={props.chat} sendQuickMessage={props.sendQuickMessage} />;
    }

    // if (type === 'carousel' && location === 'false') {
    //     return <Profile chat={props.chat} sendQuickMessage={props.sendQuickMessage} />;
    // }
    if (type === 'list') {
        return <ButtonIcon items={props.chat} sendQuickMessage={props.sendQuickMessage} />;
    }

    if (type === 'otp') {
        return (
            <Otp
                input={props}
                sendQuickMessage={props.sendQuickMessage}
                handleChange={props.handleChange}
                type={type}
            />
        );
    }
    if (type === 'daynamic_search_bar') {
        return (
            <AutoSuggest
                chat={props.chat}
                sendQuickMessage={props.sendQuickMessage}
                scrollToBottom={props.scrollToBottom}
            />
        );
    }

    if (type === 'new_cars_list' || type === 'used_cars_list') {
        return (
            <AutoSuggest
                type={type}
                chat={props.chat}
                sendQuickMessage={props.sendQuickMessage}
                scrollToBottom={props.scrollToBottom}
            />
        );
    }
    if (type === 'new_cars_detail_view') {
        return (
            <ModalPopup
                type={type}
                chat={props.chat}
                sendQuickMessage={props.sendQuickMessage}
                scrollToBottom={props.scrollToBottom}
                keys={props.keys}
            />
        );
    }

    // if (type === 'carousel') {
    //     return (
    //         <AutoSuggest
    //             type={type}
    //             chat={props.chat}
    //             sendQuickMessage={props.sendQuickMessage}
    //             scrollToBottom={props.scrollToBottom}
    //         />
    //     );
    // }

    if (type === 'get_user_location') {
        return (
            <MapsField
                keys={props.keys}
                userLocation={props.userLocation}
                handleChangeUserLocation={props.handleChangeUserLocation}
                googleMapURL={googleMapURL}
                handleSelectedLocation={props.handleSelectedLocation}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElemet={<div style={{ height: `400px` }} />}
            />
        );
    }

    if (type === 'get_map_direction') {
        return (
            <Maps
                coordinates={props.chat}
                googleMapURL={googleMapURL}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                    <div
                        className={'maps'}
                        style={{
                            marginBottom: '10px',
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            width: '100%',
                            height: '100%',
                            zIndex: '9999',
                        }}
                    />
                }
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
    if (type === 'feedback') {
        return <Feedback keys={props.keys} chat={props.chat} sendQuickMessage={props.sendQuickMessage} />;
    }

    if (type === 'new_link_payment') {
        return <AutoDirect chat={props.chat} sendQuickMessage={props.sendQuickMessage} />;
    }

    return <BotReply chat={props.chat} />;
};
