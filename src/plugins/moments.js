import Vue from "vue";
// var moment = require('moment')

// Vue.use(moment)

import moment from "moment";
moment.locale("es-MX");
Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("L");
  }
});

Vue.filter("formatDateTime", function (value) {
  if (value) {
    return moment(String(value)).format("MMMM Do YYYY, h:mm:ss a");
  }
});

Vue.filter("formatDiff", function (value) {
  if (value) {
    return moment(value).startOf("hours").fromNow();
  }
});
