import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { iMessage } from '../../../models/models';

export interface CarouselProps {
    className?: string;
    slides: iMessage[];
}

export interface CarouselState {
    currentSlideIdx: number;
}

const Item = posed.div({
    enter: {
        opacity: 1,
        transform: 'translateY(0px)',
        transition: { type: 'spring', stiffness: 80, damping: 15, mass: 2 }
    },
    exit: {
        opacity: 0,
        transform: 'translateY(-50px)',
        transition: { type: 'spring', stiffness: 80, damping: 15, mass: 2 }
    },
});

export class Carousel extends React.Component<CarouselProps, CarouselState>{
    el: HTMLDivElement;
    state = {
        currentSlideIdx: 0,
    };

    componentDidMount() {
        // Pre-load images
        this.props.slides.forEach(slide => {
            if (slide.picSrc) {
                new Image().src = slide.picSrc
            }
        });
    }

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

    render() {
        const { props, state } = this,
            cls = this.props.className || "",
            currSlide = props.slides[state.currentSlideIdx];

        return (
            <div className={"carousel " + cls} ref={e => this.el = e}>
                <div className="carousel__slide-container">
                    <PoseGroup animateOnMount>
                        {props.slides.map(e =>
                            e.idx === state.currentSlideIdx &&
                            <Item key={e.id}>
                                {e.picSrc && <img className="carousel__img" src={e.picSrc} />}
                                <p className="carousel__text">{currSlide.msg}</p>
                            </Item>
                        )}
                    </PoseGroup>
                </div>
                <div className="carousel__ctrls">
                    <div className={`carousel__ctrl-btn carousel__prev ${state.currentSlideIdx > 0 ? '' : 'disabled'}`}
                        onClick={this.prevSlide}>
                        {`<`}
                    </div>
                    <div className={`carousel__ctrl-btn carousel__next ${state.currentSlideIdx < (props.slides.length - 1) ? '' : 'disabled'}`}
                        onClick={this.nextSlide}>
                        {`>`}
                    </div>
                </div>
            </div>
        )
    }
}
