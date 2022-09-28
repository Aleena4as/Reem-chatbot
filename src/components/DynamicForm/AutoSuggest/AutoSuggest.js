import React, { useContext, useState } from 'react';
import get from 'lodash.get';
import Button from '../../Button/Button';
import { Tween } from 'react-gsap';
import { TranslateContext } from '../../../context/Translate/TranslateContext';

const AutoSuggest = props => {
    const { language } = useContext(TranslateContext);
    const [search, setSearch] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [selectedOption, setSelectedOption] = useState(false);
    const [autosuggest, setAutosuggest] = useState('');

    const changeSearch = event => {
        let searchvalue = event.target.value;

        searchvalue = searchvalue.replace(/[^A-Za-z]/gi, '');
        setSearch(searchvalue);
        props.scrollToBottom();
    };

    const selectOption = (payload, title) => {
        props.sendQuickMessage(payload, title);
        // console.log('suggested label', payload);
        setSearch('');
        setSelectedOption(true);
        setAutosuggest(title);
        setIsDisabled(true);
    };

    const dynamicSearch = () => {
        const list = get(props, 'chat.data', []);
        const se = search;

        const regex = new RegExp(`(${se})`, 'gi');
        if (props.type === 'new_cars_list') {
            return list
                .filter(option => (search === '' ? true : option.title.match(regex)))
                .map((option, index) => (
                    <div key={index} className="list-item">
                        <div
                            className="title"
                            onClick={() => selectOption(get(option.title[0], 'payload', ''), get(option, 'title', ''))}
                        >
                            <h1 dangerouslySetInnerHTML={{ __html: option.title }}></h1>
                            {/* <span>{option.description}</span> */}
                        </div>

                        {/*<Tween from={{ y: '10px', opacity: 0, delay: 1, duration: 0.8 }}>
                            <button
                                className="btn-primary"
                                
                            >
                                {get(option.title[0], 'title', '')}
                            </button>
                        </Tween> 
                          <Tween from={{ x: '100px', opacity: 0, delay: 1.5, duration: 1 }}>
                            <img className="right-top-image" src={option.image} alt="" />
                           { /* <img className="right-top-image" src="images/Rectangle@2x.png" alt="" /> }
                            </Tween>  */}
                    </div>
                ));
        } else if (props.type === 'used_cars_lists') {
            return dynamicSearchWithoutButtons();
        } else {
            return dynamicSearchWithBgImage();
        }
    };

    /**
     * This component will be rendered if the type doesnt have buttons
     *
     * This is a component that has image on the right, Text
     */
    const dynamicSearchWithoutButtons = () => {
        const list = get(props, 'chat.data', []);
        const se = search;
        const regex = new RegExp(`(${se})`, 'gi');

        return list
            .filter(option => (search === '' ? true : option.title.match(regex)))
            .map((option, index) => (
                <div
                    key={index}
                    className="list-item user-cars"
                    onClick={() => selectOption(option.payload, option.label)}
                >
                    <Tween from={{ x: '-50px', opacity: 0, delay: 0.4, duration: 0.3 }}>
                        <div className="title">
                            <h1>{option.title}</h1>
                            <span>{option.description}</span>
                        </div>
                    </Tween>
                    <Tween from={{ x: '100px', opacity: 0, delay: 1.5, duration: 0.5 }}>
                        <img className="normal-image" loading="lazy" src={option.image} alt="" />
                    </Tween>
                </div>
            ));
    };

    /**
     * This component will be rendered if the type doesnt have buttons
     *
     *
     * This is a component that has backgroundImage, Text and button
     *
     */
    const dynamicSearchWithBgImage = () => {
        const list = get(props, 'chat.data', []);
        const se = search;
        const regex = new RegExp(`(${se})`, 'gi');

        return list
            .filter(option => (search === '' ? true : option.title.match(regex)))
            .map((option, index) => (
                <div
                    key={index}
                    className="list-item bg-image"
                    onClick={() => selectOption(get(option, 'payload', ''), get(option, 'title', ''))}
                >
                    <button className="btn-primary">{option.title}</button>
                </div>
            ));
    };

    const arabic = language === 'ar' ? true : false;
    return (
        <div className="autosuggest-container">
            <div
                className={`input-section ${arabic ? 'shift-right' : ''} ${
                    props.type === 'new_cars_list' ? 'big-margin' : ''
                }`}
            >
                <input
                    type="text"
                    value={selectedOption ? autosuggest : props.autosuggest}
                    // placeholder={arabic ? 'البحث بإسم الطبيب' : get(props, 'chat.text', '')}
                    placeholder={arabic ? 'choose' : get(props, 'chat.text', '')}
                    
                    onChange={changeSearch}
                    name="search"
                    className={arabic ? 'right-align' : ''}
                    autoComplete="off"
                    disabled={isDisabled}
                />
                <Button className="circle-btn">
                    <img src="svgIcons/search.svg" alt="" />
                </Button>
            </div>

            {!selectedOption && (
                <div className={`suggestion-list ${props.type !== 'new_cars_list' ? 'without-button' : ''} `}>
                    {dynamicSearch()}
                </div>
            )}
        </div>
    );
};

export default AutoSuggest;
