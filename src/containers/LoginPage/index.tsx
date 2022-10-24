import React from 'react';
import LoginForm from './LoginForm';
import Logo from '../../resources/images/Logo.jpg'
import './style.css';
import { ILogin } from '../../type/type.login';
import request from '../../utils/request';
import ApiEndPoint from '../../utils/api';
import axios from 'axios';
import apiList from '../../common/api';
import {useSelector} from 'react-redux';

const LoginPage = () => {

  const [loading, setLoading] = React.useState<boolean>(false);

  const state = useSelector((state : any) => state);

  console.log(state);
  
  const loginHandle = async (formValues : ILogin) => {
    setLoading(true);
    const data = await axios.post(apiList.loginApi, {
      email: formValues.email,
      password: formValues.password
    });
    if(data.data.status == 200) {
      return (
        window.location.href = '/home'
      )
    }
    setLoading(false);
  };

    return (
        <>
          <div className ="logo">
           <img src={Logo} style={{width : '20%'}} alt ="logo-login" />
          </div>
          <LoginForm loading = {loading} loginHandle = {loginHandle} />
        </>
    )
}

export default React.memo(LoginPage);