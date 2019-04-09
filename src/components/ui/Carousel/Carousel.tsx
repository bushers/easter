import * as React from 'react'; 
import { iMessage } from '../../../models/models';

export interface CarouselProps{
    className?:string;
    slides: iMessage[];
}

export interface CarouselState{
    currentSlideIdx: number;
}

export class Carousel extends React.Component<CarouselProps, CarouselState>{
    el:HTMLDivElement;
    state = { currentSlideIdx: 0 };

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

        return (
            <div className={"carousel " + cls} ref={e=> this.el= e}>
                <div className="carousel__slide-container">
                    {this.state.currentSlideIdx}
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
