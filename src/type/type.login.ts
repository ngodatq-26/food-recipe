export interface ILogin {
    email : string,
    password : string,
    remember : boolean
}

export interface ILoginForm {
    initialValue : ILogin,
    isLoading : boolean,
}