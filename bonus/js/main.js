'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      apiEmaiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails: [],
      email: null,

      maxNumber: 10,
    };
  },
  methods: {
    // randomEmail() {
    //   axios.get(this.apiEmaiUrl).then((response) => {
    //     console.log(response.data);
    //     this.email = response.data.response;
    //   });
    // },

    listaEmail() {
      for (let i = 0; i < this.maxNumber; i++) {
        axios.get(this.apiEmaiUrl).then((response) => {
          this.email = response.data.response;
          this.emails.push(this.email);
        });
      }
    },
  },
  created() {
    this.listaEmail();
  },
}).mount('#app');
