import axios from "axios";
const API_URL = "http://localhost:3001";

export default class userServices {
  static getUsers() {
    const url = `${API_URL}/users`;
    return axios.get(url).then(response => {
      return response.data;
    });
  }

  static getUser(id) {
    const url = `${API_URL}/users/${id}`;
    return axios.get(url).then(response => {
      return response.data;
    });
  }

  static updateUser(user) {
    const url = `${API_URL}/users/${user.id}`;
    return axios.update(url).then(response => {
      return response.data;
    });
  }

  static deleteUser(id) {
    const url = `${API_URL}/users/${id}`;
    return axios.delete(url).then(response => {
      return response.data;
    });
  }

  static addUser = user => axios.post(`${API_URL}/users`, user);
}
