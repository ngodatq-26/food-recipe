import React from 'react';
import {IPayloadRequest} from '../type/type.api';

export default class ApiEndPoint {

    static makeApiPayload = (
        url : string,
        method : string,
        payload? : any,
        contentType? : any | null
    ) => {
        const jsonPayload : IPayloadRequest = {
            baseURL : 'http://dnqfood.tk',
            endpoint : url,
            method : method,
            withCredentials : true,
            data : payload,
            headers: {
                Accept: contentType ? '' : 'application/json',
                "Content-Type": contentType ? contentType : 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('ACCESS_TOKEN') ?? ''}`
            },
        }

        if (payload !== null) {
            const formData = new FormData();
            switch (jsonPayload.headers['Content-Type']) {
                case 'application/json':
                    jsonPayload.data = payload;
                    break;
                case 'multipart/form-data':
                    // eslint-disable-next-line no-restricted-syntax
                    for (const key of Object.keys(payload)) {
                        formData.append(key, payload[key]);
                    }
                    jsonPayload.data = formData;
                    break;
                default:
                    jsonPayload.data = null;
            }
        }
        return jsonPayload;
    }
}