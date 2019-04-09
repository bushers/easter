import * as React from "react"; 
import { SocialButtons } from '../SocialButtons/SocialButtons';
import { Translation } from '../../../models/models';


export interface FooterProps{
    locale:Translation;
}

export interface FooterState{

}

export class Footer extends React.Component<FooterProps, FooterState>{
    constructor(props:FooterProps){
        super(props);
    }


    render(){
        let props = this.props, 
            state = this.state, 
            locale = this.props.locale;
            
        return (
            <div className="footer-container">
                <div className="social-buttons-wrapper">
                        <SocialButtons 
                            locale={locale}
                        />
                    </div>
            </div>
        )
    }
}