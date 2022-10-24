export interface IPayloadRequest {
    baseURL : string,
    endpoint : string,
    withCredentials? : string | boolean,
    method : string,
    data? : any,
    headers : any,
}

export interface jsonPayloadLogin {
    email? : string;
    password? : string;
    accessToken? : string;
    refreshToken? : string;
}

export interface HeadersRes {
    Accept: string;
    'Content-Type': string;
    'Authorization': string | null;
};