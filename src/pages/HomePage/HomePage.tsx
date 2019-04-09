
import * as React from 'react'; 
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
  
import { IStoreState } from '../../_reducers';
import { Translation } from '../../models/models';
import { RouteComponentProps } from 'react-router';
import { Carousel } from '../../components/ui/Carousel/Carousel';
import { DATA } from '../../services/DataService';


export interface HomePageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any>{
    className?:string;
    locale:Translation;
}

const INIT_STATE:HomePageState = {

}

export interface HomePageState{

}

export class HomePage extends React.Component<HomePageProps, HomePageState>{

    constructor(props:HomePageProps){
        super(props); 
        this.state = INIT_STATE; 
    }

    render(){
        let {props, state} = this;
        let cls = this.props.className || "";

        return (
            <div className={"homepage " + cls}>
                <Carousel slides={DATA.messages} />     
            </div>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps):Partial<HomePageProps> =>{
    return {
        locale:state.app.locale
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
