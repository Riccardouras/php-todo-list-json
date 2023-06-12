const app = Vue.createApp({
    data() {
        return {
      
        }
    },
    mounted() {
        axios.get('/api/todos')
            .then(response => {
                this.todos = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    },

});

app.mount('#app');