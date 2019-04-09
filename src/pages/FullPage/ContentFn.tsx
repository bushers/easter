import * as React from 'react';
import { iData } from "../../models/models";
import { Button } from '../../components/ui/Button/Button';

interface iFullContentProp{
    data:iData; 
}

export const M_FullContent:React.SFC<iFullContentProp> = (props)=>{
    return <section>
        <M_Title data={props.data}/>
        <M_Description data={props.data}/>
        <M_Content data={props.data}/>
    </section>
}

export const M_Title:React.SFC<iFullContentProp> = (props) =>{
    return <h1>{props.data.title}</h1>
}

export const M_Description:React.SFC<iFullContentProp> = (props) => {
    return <p>{props.data.copy}</p>
}

export const M_Content:React.SFC<iFullContentProp> = (props) => {
    switch (props.data.graphType) {
        case "cards-or-bar":
            return <Button onClick={()=>{}}>Cards or Bar</Button>
        case "line-graph":
            return <Button onClick={()=>{}}>Line Graph</Button>
        case "trump-cards":
            return <Button onClick={()=>{}}>trump cards</Button>
        default:
            return <p>No items</p>
    }
}

