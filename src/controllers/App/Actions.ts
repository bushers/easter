import { APP_START } from '../../constants';
import { WINDOW_VIEWS } from './StateAndProps';


export const TYPES = {
    DATA_LOADED: APP_START | 0x00001,
};

export const ACTIONS = {
    DATA_LOADED: function (a: any) {
        return {
            type: TYPES.DATA_LOADED,
            data: a
        };
    }


};