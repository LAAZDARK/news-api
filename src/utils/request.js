import axios from "axios";
// import _ from 'lodash'
// import {  Message } from 'element-ui'
try {
  const configElement = document.getElementById("config");
  var url = "https://newsapi.org/v2";
  var config = JSON.parse(configElement.innerHTML);
  config.baseApi = config.baseApi ? config.baseApi : url;
} catch (error) {
  console.log(error);
}

// create an axios instance
const service = axios.create({
  baseURL: "https://newsapi.org/v2",
  // config.baseApi, // url = base url + request url
  crossDomain: true,
  method: "get",
  headers: {
    // "Access-Control-Allow-Headers": "*",
  },
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 0, // request timeout
});

export default service;
