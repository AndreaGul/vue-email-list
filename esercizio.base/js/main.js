'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      apiEmaiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      email1: null,
      email2: null,
      email3: null,
      email4: null,
      email5: null,
      email6: null,
      email7: null,
      email8: null,
      email9: null,
      email10: null,
    };
  },

  created() {
    axios.get(this.apiEmaiUrl).then((response) => {
      this.email1 = response.data.response;
    });
    axios.get(this.apiEmaiUrl).then((response) => {
      this.email2 = response.data.response;
    });
    axios.get(this.apiEmaiUrl).then((response) => {
      this.email3 = response.data.response;
    });
    axios.get(this.apiEmaiUrl).then((response) => {
      this.email4 = response.data.response;
    });
    axios.get(this.apiEmaiUrl).then((response) => {
      this.email5 = response.data.response;
    });
    axios.get(this.apiEmaiUrl).then((response) => {
      this.email6 = response.data.response;
    });
    axios.get(this.apiEmaiUrl).then((response) => {
      this.email7 = response.data.response;
    });
    axios.get(this.apiEmaiUrl).then((response) => {
      this.email8 = response.data.response;
    });
    axios.get(this.apiEmaiUrl).then((response) => {
      this.email9 = response.data.response;
    });
    axios.get(this.apiEmaiUrl).then((response) => {
      this.email10 = response.data.response;
    });
  },
}).mount('#app');
