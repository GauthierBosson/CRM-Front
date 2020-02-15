import axios from "axios";
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

const API_URL = "http://localhost:3001/api/v1";

export default class clientsServices {
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

  static getClients(ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/clients`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static getClient(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/clients/${id}`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static updateClient(client, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/clients/${client.id}`;
    return instance.patch(url).then(response => {
      return response.data;
    });
  }

  static deleteClient(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/clients/${id}`;
    return instance.delete(url).then(response => {
      return response.data;
    });
  }

  static addClient = (client) => {
    const token = cookie.get('token');
    const instance = axios.create({
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    return instance.post(`${API_URL}/clients/add`, client)
      .then(response => response.data.data.doc);
  } 
}
