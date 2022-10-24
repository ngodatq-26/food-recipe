import React from 'react';
import axios from 'axios'
import {AxiosResponse} from 'axios';

const client  = axios.create({
    baseURL : 'http://dnqfood.tk',
    headers : {
        'Content-Type': 'application/json',
    },
});

client.interceptors.response.use(
    (res) => res,
);

interface TypeError {};

const request = async (options : any) => {
    const onSuccess = (response: AxiosResponse<any>) => response.data;
    const onFailure = (error : any) => {
        return Promise.reject(error);
    }

    try {
        const response = await client(options);
        return onSuccess(response);
    } catch (error) {
        return onFailure(error);
    }
}

export default request;
