import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { iMessage } from '../../../models/models';

export interface CarouselProps {
    className?: string;
    slides: iMessage[];
}

export interface CarouselState {
    currentSlideIdx: number;
    show: boolean;
}

const Item = posed.div({
    enter: {
        opacity: 1,
        transform: 'translateY(0px)',
        transition: { type: 'spring' }
    },
    exit: {
        opacity: 0,
        transform: 'translateY(-50px)',
        transition: { type: 'spring' }
    },
});

export class Carousel extends React.Component<CarouselProps, CarouselState>{
    el: HTMLDivElement;
    state = {
        currentSlideIdx: 0,
        show: true,
    };

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

    render() {
        const { props, state } = this,
            cls = this.props.className || "",
            currSlide = props.slides[state.currentSlideIdx];

        return (
            <div className={"carousel " + cls} ref={e => this.el = e}>
                <div className="carousel__slide-container" onClick={this.toggle}>
                    <PoseGroup>
                        {props.slides.map(e =>
                            e.idx === state.currentSlideIdx &&
                            <Item key={e.id}>{currSlide.msg}</Item>)}
                    </PoseGroup>
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
