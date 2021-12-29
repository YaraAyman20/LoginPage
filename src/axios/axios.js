import axios from "axios";

const instance = axios.create({
  baseURL: "https://dcw-test.layermark.com/layerexchange-api",
});

export default instance;