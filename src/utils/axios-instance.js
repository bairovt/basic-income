'use strict';

const axios = require('axios');

const axiosIst = axios.create({
  baseURL: process.env.API_URL,
  // withCredentials: true
});


axiosIst.interceptors.request.use(function (config) {
    const authToken = window.localStorage.getItem('authToken'); // token or null
    if (authToken) config.headers.Authorization = 'Bearer ' + authToken;
    return config;
  }, function (error){
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosIst;