import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://aprel-f2e42.firebaseio.com";

export default instance;
