import axios from "axios";
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

const API_URL = "http://localhost:3001/api/v1";

export default class companiesServices {
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

  static getCompanies(ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/companies`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static getCompany(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/companies/${id}`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static getClientsByCompany(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/companies/clients/${id}`
    return instance.get(url).then(response => response.data)
  }

  static updateCompany(company, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/companies/${company.id}`;
    return instance.patch(url).then(response => {
      return response.data;
    });
  }

  static deleteCompany(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/companies/${id}`;
    return instance.delete(url).then(response => {
      return response.data;
    });
  }

  static addCompany = (company) => {
    const instance = axios.create({
      headers: {
        'Authorization': 'Bearer ' + cookie.get('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    return instance.post(`${API_URL}/companies/add`, company).then(response => {
      return response.data;
    });
  }
}
