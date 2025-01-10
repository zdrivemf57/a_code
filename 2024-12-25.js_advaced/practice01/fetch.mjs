import axios from "axios";
axios
    .get("http://localhost:3000/items")
    .then(response => console.log(response.data));
axios
    .get("http://localhost:3000/items?id=1")
    .then(response => console.log(response.data));