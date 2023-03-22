'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            email:[]
        }
    },
    beforeCreate() {
        for(let i=0;i<10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risultato)=>{
                this.email.push(risultato.data.response)
            })
        }
        
    }

}).mount('#app');

