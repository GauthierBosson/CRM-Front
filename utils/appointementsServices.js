import axios from "axios";
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

const API_URL = "http://localhost:3001/api/v1";

export default class categoriesServices {
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

  static getAppointements(ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/appointements`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static getAppointement(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/appointements/${id}`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static updateAppointement(appointement, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/appointements/${appointement.id}`;
    return instance.update(url).then(response => {
      return response.data;
    });
  }

  static deleteAppointement(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/appointements/${id}`;
    return instance.delete(url).then(response => {
      return response.data;
    });
  }

  static addAppointement = (appointement) => {
    const token = cookie.get('token');
    const instance = axios.create({
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    instance.post(`${API_URL}/appointements/add`, appointement)
      .then(response => response.data);
  }
}