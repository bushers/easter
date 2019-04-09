
import * as ReactRedux from 'react-redux'; 
import { iActionType, Translation, INIT_TRANSLATIONS, Dictionary, iData } from '../../models/models';
export const STATE_KEY = 'app';


export interface AppProps extends ReactRedux.DispatchProp<any>{
	appState:AppState;
	loadData:(e)=>iActionType;
	// componentName:string;
	// isMobile:boolean; 
	// injector:any;
	// dataService:DataService;
}
export enum WINDOW_VIEWS {
	SPLASH, 
	CONTENT
}

export interface AppState{
	locale:Translation; 
	data:Dictionary<iData>;
}
export const AppInitState:AppState = {
	locale:INIT_TRANSLATIONS,
	data:null
}

export interface inAppState{
}

export const inAppInitialState:inAppState = {
}
