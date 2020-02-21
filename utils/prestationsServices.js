import axios from "axios";
import nextCookie from 'next-cookies';

const API_URL = process.env.API_URL || 'http://localhost:3001/api/v1';

export default class prestationsServices {
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

  static getPrestations(ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/prestations`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static getPrestation(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/prestations/${id}`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static updatePrestation(prestation, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/prestations/${prestation.id}`;
    return instance.update(url).then(response => {
      return response.data;
    });
  }

  static deletePrestation(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/prestations/${id}`;
    return instance.delete(url).then(response => {
      return response.data;
    });
  }

  static addPrestation = (prestation, ctx) => {
    const instance = this.createInstance(ctx);
    instance.post(`${API_URL}/prestations/add`, prestation);
  }
}
