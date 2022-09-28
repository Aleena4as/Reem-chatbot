import React, { useContext, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import get from 'lodash.get';
import { TranslateContext } from '../../context/Translate/TranslateContext';
import { classFunction } from '../../utils/Function';

const AsNavFor = props => {
    const { language } = useContext(TranslateContext);
    let slider1 = useRef();
    let slider2 = useRef();

    const [allNav, setAllNav] = useState({
        nav1: null,
        nav2: null,
    });

    useEffect(() => {
        setAllNav(val => ({
            ...val,
            nav1: slider1,
            nav2: slider2,
        }));
    }, []);

    const arabic = language === 'ar' ? true : false;
    return (
        <div className="tabCarousal">
            {/* First Slider */}
            <Slider
                asNavFor={allNav.nav1}
                ref={slider => (slider2 = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
                dots={true}
                arrows={false}
                infinite={false}
                speed={300}
                edgeFriction={0}
                variableWidth={true}
                draggable={true}
                swipeToSlide={true}
                touchMove={true}
            >
                <div className="slide-wrap">
                    <div className="tabSliderBox">
                        <img src="images/temp-car-image.jpg" alt=""></img>
                        <div className="features">
                            <p>{arabic ? 'المواصفات' : 'Specifications'}</p>
                        </div>
                    </div>
                </div>
                <div className="slide-wrap">
                    <div className="tabSliderBox">
                        <img src="images/interior.png" alt=""></img>
                        <div className="features">
                            <p>{arabic ? 'التصميم الداخلي' : 'Interior'}</p>
                        </div>
                    </div>
                </div>
                <div className="slide-wrap">
                    <div className="tabSliderBox">
                        <img src="images/Exterior@2x.png" alt=""></img>
                        <div className="features">
                            <p>{arabic ? 'الميزات الخارجية' : 'Exterior'}</p>
                        </div>
                    </div>
                </div>
            </Slider>

            {/* Second Slider */}

            <Slider
                asNavFor={allNav.nav2}
                ref={slider => (slider1 = slider)}
                swipeToSlide={true}
                infinite={false}
                focusOnSelect={true}
                arrows={false}
                speed={300}
                edgeFriction={0}
                slidesToShow={1}
                slidesToScroll={1}
                variableWidth={true}
                draggable={true}
                swipeToSlide={true}
                touchMove={true}
            >
                <section className={classFunction('specification-section tabSlider', arabic, 'right-align')}>
                    <div className="title">{arabic ? 'المواصفات' : 'Specifications'}</div>
                    <div className="grid">
                        {Object.entries(get(props.info, 'specs', {})).map(([key, value], index) => (
                            <React.Fragment key={index}>
                                <div className="row row-key">{key.replace(/_/g, ' ')}</div>
                                <div className="row">{value}</div>
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                <section className={classFunction('specification-section tabSlider', arabic, 'right-align')}>
                    <div className="title"> {arabic ? 'التصميم الداخلي' : 'Interior Features'}</div>

                    {get(props.info, 'interior_features', {})
                        .split('|')
                        .map(data => (
                            <li className={classFunction('features-list', arabic, 'right-align')}>{data}</li>
                        ))}
                </section>

                <section className={classFunction('specification-section tabSlider', arabic, 'right-align')}>
                    <div className="title"> {arabic ? 'الميزات الخارجية' : 'Exterior Features'}</div>

                    {get(props.info, 'exterior_features', {})
                        .split('|')
                        .map(data => (
                            <li className={classFunction('features-list', arabic, 'right-align')}>{data}</li>
                        ))}
                </section>
            </Slider>
        </div>
    );
};

export default AsNavFor;
