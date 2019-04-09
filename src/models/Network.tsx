import * as React from 'react';
import {CONFIG} from '../config';
import axios from 'axios';

export interface requestParams{
    url:string, 
    method:string, 
    data?:any,
    dataType?:string
}
class Network{
    prefix:string = ""
    constructor(val:string){
        this.prefix = val;
    }

    request(method:string, url:string, data:any = {}){
        return axios.request({
            method:method,
            url: CONFIG.URL + url,
            data:data,
        })
    }

    get(url:string){
        let s = this.request("get", url);
        return s;
    }

    post(url:string, data:any = {}){
        let s = this.request("post", url, data);
        return s;
    }

    put(url:string, data:any = {}){
        let s = this.request("put", url, data);
        return s;
    }

    delete(url:string, data:any = {}){
        let s = this.request("delete", url, data);
        return s;
    }
    
}


export class Model extends Network{
    
    constructor(v){
        super(v)
    }

    create = (data)=>{
        this.post(this.prefix + "/", data);
    }

    find = (id:number)=>{
        this.get(this.prefix + "/" + id);
    }

    getAll = ()=>{
        this.get(this.prefix + "/");
    }

    destroy = (id)=>{
        this.delete(this.prefix + "/" + id);
    }

    update = (id, data)=>{
        this.put(this.prefix + "/" + id, data);
    }
}