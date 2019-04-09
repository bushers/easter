import * as React from 'react'
import * as _ from 'lodash';
import { Button } from '../Button/Button';


export interface PaginatorProps{
    getElement:(index:number)=>JSX.Element;
    elementsPerView:number; 
    totalElements:number;
    currentPageIdx?:number; 
    showState?:boolean;
    className?:string; 
}

export interface PaginatorState{
    showState:boolean;
    totalPages:number;
    currentPageIdx:number;
}

export class Paginator extends React.Component<PaginatorProps, PaginatorState>{
    constructor(p:PaginatorProps){
        super(p);
        this.state = {
            showState:this.props.showState, 
            totalPages:0,
            currentPageIdx:0
        }
    }

    public static defaultProps: Partial<PaginatorProps> = {
        className:"", 
        showState:false
    }


    componentDidMount(){
        this.calculatePages();
    }

    componentDidUpdate(prevProps:PaginatorProps, prevState:PaginatorState){
        if(prevProps.totalElements !== this.props.totalElements){
            this.calculatePages();
        }
    }

    resetIndex = ()=>{
        this.setState({
            currentPageIdx:0
        })
    }

    goToEnd = ()=>{
        this.setState({
            currentPageIdx:this.state.totalPages - 1
        })
    }

    calculatePages = ()=>{
        this.setState({
            totalPages: Math.ceil(this.props.totalElements/this.props.elementsPerView),
            currentPageIdx:this.props.currentPageIdx || 0
        })
    }

    showPreviousElements = ()=>{
        let temp = this.state.currentPageIdx - 1; 
        if(temp<0){
            temp = 0; 
        }

        this.setState({currentPageIdx:temp})
        return temp;
    }

    showNextElements = ()=>{
        let temp = this.state.currentPageIdx + 1; 
        if(temp> this.state.totalPages-1){
            temp = this.state.totalPages-1; 
        }
        
        this.setState({currentPageIdx:temp})
        return temp
    }

    getShownElement = ()=>{
        _.range((this.state.currentPageIdx * this.props.elementsPerView), (this.state.currentPageIdx * this.props.elementsPerView) + this.props.elementsPerView).map((e)=>{
            return this.props.getElement(e)
        })
    }

    render(){
        let props = this.props, 
            state = this.state;
        return (
            <div className={"paginator " + props.className}>
                {/* <div className="paginator__elements"> */}
                    {
                        _.range((state.currentPageIdx * props.elementsPerView), (state.currentPageIdx * props.elementsPerView) + props.elementsPerView).map((e)=>{
                            return props.getElement(e)
                        })
                    }
                {/* </div> */}
            
                {
                    this.state.showState && 
                    <div className="paginator__controls center">
                        <div className="paginator__buttons animated fadeInUp">
                            <div className="main paginator__btn paginator__btn--prev"
                                onClick={this.showPreviousElements}>

                                <i className="icon-mc-prev"></i>
                            </div>
                            <div className="paginator__status center">
                                <p>
                                    {(state.currentPageIdx+1)} of { state.totalPages }
                                </p>
                            </div>
                            <div className="main paginator__btn paginator__btn--next"
                                onClick={this.showNextElements}>

                                <i className="icon-mc-next"></i>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}