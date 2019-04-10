import * as React from 'react';
import { iMessage } from '../../../models/models';
import { Spring, animated } from 'react-spring/renderprops';

export interface CarouselProps{
    className?:string;
    slides: iMessage[];
}

export interface CarouselState{
    currentSlideIdx: number;
    show: boolean;
}

export class Carousel extends React.Component<CarouselProps, CarouselState>{
    el:HTMLDivElement;
    state = { currentSlideIdx: 0, show: true };

    toggle = (e: React.SyntheticEvent<any>) => this.setState(state => ({ show: !state.show }));

    nextSlide = () => {
        if (this.state.currentSlideIdx < (this.props.slides.length - 1)) {
            this.setState(state => ({ currentSlideIdx: state.currentSlideIdx + 1 }))
        }
    }

    prevSlide = () => {
        if (this.state.currentSlideIdx > 0) {
            this.setState(state => ({ currentSlideIdx: state.currentSlideIdx - 1 }))
        }
    }

    render(){
        const { props, state } = this,
            cls = this.props.className || "";
        const currSlide = props.slides[state.currentSlideIdx];

        return (
            <div className={"carousel " + cls} ref={e=> this.el= e}>
                <div className="carousel__slide-container" onClick={this.toggle}>
                    <Spring
                        delay={300}
                        from={{ opacity: 0.1, marginTop: -100 }}
                        to={{ opacity: 1, marginTop: 0 }}>
                        {p => <div style={p}>hello</div>}
                    </Spring>
                </div>
                <div className="carousel__ctrls">
                    {state.currentSlideIdx > 0 &&
                        <div className="carousel__prev" onClick={this.prevSlide}>
                            {`<`}
                        </div>}
                    {state.currentSlideIdx < (props.slides.length - 1) &&
                        <div className="carousel__next" onClick={this.nextSlide}>
                            {`>`}
                        </div>}
                </div>
            </div>
        )
    }
}
