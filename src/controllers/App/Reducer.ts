import { TYPES } from './Actions';
import { AppState, AppInitState } from './StateAndProps';
import * as _ from 'lodash';


export function Reducer(state = AppInitState, action): any {
	switch (action.type) {
		case TYPES.DATA_LOADED:
			state.locale = action.data.locale; 
			state.data = action.data.data
		return _.merge({}, state); 
		default:
			return state;
	}

}


