import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TranslateContext } from '../../context/Translate/TranslateContext';
export default class SimpleSlider extends Component {
    static contextType = TranslateContext;
    constructor(props) {
        super(props);
        this.state = {
            language: '',
        };
    }
    componentDidMount() {
        this.translatedContent = this.context;
        this.setState({
            language: this.translatedContent.language,
            translatedLanguage: this.translatedContent.translatedLanguage,
            sliderText1: this.translatedContent.translatedLanguage.sliderText1,
            sliderText2: this.translatedContent.translatedLanguage.sliderText2,
            sliderText3: this.translatedContent.translatedLanguage.sliderText3,
        });
        // console.log('adasda', this.context)
    }
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            edgeFriction: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoPlay: true,
            draggable: true,
            swipeToSlide: true,
            touchMove: true,
        };
        return (
            <div className="slider-container">
                <Slider {...settings}>
                    <a
                        href={`https://www.reemhospital.com/${this.state.language === 'en' ? '' : 'ar/'}testimonial`}
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <div className="innerSlide">
                            <h3>{this.state.sliderText1}</h3>
                        </div>
                    </a>

                    <a
                        href={`https://www.reemhospital.com/${this.state.language === 'en' ? '' : 'ar/'}health-hub"`}
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <div className="innerSlide">
                            <h3>{this.state.sliderText2}</h3>
                        </div>
                    </a>

                    <a
                        href={`https://www.reemhospital.com/${this.state.language === 'en' ? '' : 'ar/'}doctors`}
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <div className="innerSlide">
                            <h3>{this.state.sliderText3}</h3>
                        </div>
                    </a>
                </Slider>
            </div>
        );
    }
}
