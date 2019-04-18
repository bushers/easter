import { Translation, iEasterData } from '../models/models';
// import fb from './Firebase'
import * as Promise from 'bluebird';
import * as id from 'lodash.uniqueid';
import { RES_URL } from '../config';

export class DataService {
    app: any;
    database: any;
    translations: Translation;
    locale: string;
    def: any;

    data: any;
    isDataLoaded: boolean;
    constructor() {
        let w: any = window;
        this.locale = w.__LOCALE__;

        this.isDataLoaded = false;

        // this.database = fb.database(); 
    }

    load() {
        return new Promise((res, rej) => {

            // this.database.ref("/"+this.locale).on("value",
            //     (e: any)=>{
            // this.data = e.val() as any;
            this.data = DATA;


            this.isDataLoaded = true;
            res(this.data);
            //     }
            // )
        })
    }

    getByKey = (key: string) => {
        return this.data[key];
    }

    getNavBar = () => {
        return this.data.navBar;
    }

    getLocale = () => {
        return this.data.locale;
    }

    getData() {
        return this.data;
    }
}

const DATA_SERVICE = new DataService();

export default DATA_SERVICE;

export const DATA: iEasterData = {
    messages: [
        {
            id: id('msg_'),
            idx: 0,
            msg: 'Message number one'
        },
        {
            id: id('msg_'),
            idx: 1,
            msg: 'Message number two'
        },
        {
            id: id('msg_'),
            idx: 2,
            msg: 'Message number three'
        },
        {
            id: id('msg_'),
            idx: 3,
            picSrc: `${RES_URL}img/pic.jpg`,
            msg: 'Message number four, lorum ipsum long message, lorum ipsum long message, lorum ipsum long message, lorum ipsum long message,'
        },
        {
            id: id('msg_'),
            idx: 4,
            picSrc: `${RES_URL}img/pic2.jpg`,
            msg: 'Message number four, lorum ipsum long message,'
        },
        {
            id: id('msg_'),
            idx: 5,
            picSrc: `${RES_URL}img/pic3.jpg`,
            msg: 'Message number four, lorum ipsum long message,'
        },
    ],
};
