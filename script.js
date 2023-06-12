const app = Vue.createApp({
    data() {
        return {
            apiURL: "./api.php",
            tasks: []
        }
    },
    methods: {
        chiamata() {
            console.log("Faccio cose, vedo gente");
        }
    },
    mounted() {
        axios.get(this.apiURL)
            .then(response => {
                this.todos = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    },

});

app.mount('#app');