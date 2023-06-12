const app = Vue.createApp({
    data() {
        return {
            apiURL: "/api.php",
            tasks: []
        }
    },
    methods: {
     
    },
    mounted() {
        axios.get('./api.php')
            .then(response => {
                this.tasks = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    },

});

app.mount('#app');