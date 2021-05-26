import axios from "axios";
// import _ from 'lodash'
// import {  Message } from 'element-ui'
try {
  const configElement = document.getElementById("config");
  var config = JSON.parse(configElement.innerHTML);
  config.baseApi = config.baseApi
    ? config.baseApi
    : "https://newsapi.org/v2/everything?q=Apple&from=2021-05-25&sortBy=popularity&apiKey=69343b2637a84511a1d25b320a1bd427";
} catch (error) {
  console.log(error);
}

// create an axios instance
const service = axios.create({
  baseURL: config.baseApi, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 0, // request timeout
});

export default service;
