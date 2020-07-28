import axios from "axios";
const API_URL = "http://localhost:3003/v1/";
const api = () => createApiInstance();

export default {
  login: async (body, success, failure) => {
    try {
      console.log("tuoj vykdysiu requesta");
      console.log(body, "body");
      const response = await api().post(API_URL + "user/login", body);
      console.log("paejo");

      success(response.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },
  register: async (body, success, failure) => {
    try {
      const response = await api().post(API_URL + "user/register", body);
      console.log("paejo");
      success(response.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },
  getUser: async (success, failure) => {
    try {
      const response = await api().get(API_URL + "auth/user");
      success(response.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  },
  fetchItems: async (success, failure) => {
    try {
      const response = await api().get(API_URL + "products");
      success(response.data);
    } catch (context) {
      let errorsMessages = [];
      const { errors } = context.response.data;
      for (const errorName in errors) {
        errorsMessages = [...errorsMessages, ...errors[errorName]];
      }
      failure(errorsMessages);
    }
  }
};
function createApiInstance() {
  if (localStorage.token) {
    // Automatiškai grąžinamas autorizuotas axios instance,
    return axios.create({
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.token
      }
    });
  } else {
    // Automatiškai grąžinamas NEautorizuotas axios instance,
    return axios.create({
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
