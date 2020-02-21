import axios from "axios";
import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

const API_URL = process.env.API_URL || 'http://localhost:3001/api/v1';

export default class userServices {
  static createInstance(ctx) {
    const { token } = nextCookie(ctx);
    return axios.create({
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  static getUsers(ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/users`;
    return instance.get(url).then(response => {
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

  static addUser = (user) => { 
    const token = cookie.get('token');
    const instance = axios.create({
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    return instance.post(`${API_URL}/users/signup`, user).then(response => response.data);
  }
}
