const app = Vue.createApp({
    data() {
        return {
            apiURL: "/api.php",
            tasks: [],
            newTask: ""
        }
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
    methods: {
        sendData(data) {
            axios.post(this.apiURL, data, {
                headers: { 'Content-Type': 'multipart/form-data' }})
                .then(response => {
                    this.tasks = response.data;
                    this.newTask = "";
                })  
        },
        addNewTask() {
            console.log(this.newTask)
            const data = { newTask: this.newTask };
            this.sendData(data);
        },
       
    },
    
    
});

app.mount('#app');