
import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IStoreState } from '../../_reducers';
import { iActionType, Translation, iData } from '../../models/models';
import { RouteComponentProps } from 'react-router';
import { Dictionary } from 'lodash';
import * as _ from 'lodash';
import { M_FullContent } from './ContentFn';
import { HomePage } from '../Homepage/Homepage';
import { EmbedComponent, InfoComponent } from '../../components/ui/Dialog/Utils';

export interface FullPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    locale: Translation;
    data: Dictionary<iData>
}

const INIT_STATE: FullPageState = {

}

export interface FullPageState {

}


export class FullPage extends React.Component<FullPageProps, FullPageState>{

    constructor(props: FullPageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    render() {
        let { props, state } = this;
        let cls = this.props.className || "";
        return (
            <div className={"full-page container" + cls}>
                <div className="row">
                    <div className="col s12">
                        <section>
                            <HomePage 
                                locale={props.locale}
                            />
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        {
                            _.map(props.data, ((e) => {
                                return <M_FullContent
                                    key={e.key}
                                    data={e}
                                />
                            })
                            )
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <section>
                            <EmbedComponent locale={props.locale} />
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <section>
                            <InfoComponent locale={props.locale} />
                        </section>
                    </div>
                </div>

            </div>
        )
    }

}



const mapStateToProps = (state: IStoreState, ownProps): Partial<FullPageProps> => {
    return {
        locale: state.app.locale,
        data: state.app.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FullPage);