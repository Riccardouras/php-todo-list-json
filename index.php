<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div id="app">
        <h1>To Do List:</h1>

        <ul>
            <li v-for="task in tasks" :key="task">
                {{ task }}
            </li>
        </ul>
    </div>

    <script src="./script.js"></script>
</body>

</html>