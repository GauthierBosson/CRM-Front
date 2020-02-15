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

  static getCategories(ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/categories`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static getCategory(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/categories/${id}`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static updateCategory(category, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/categories/${category.id}`;
    return instance.update(url).then(response => {
      return response.data;
    });
  }

  static deleteCategory(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/categories/${id}`;
    return instance.delete(url).then(response => {
      return response.data;
    });
  }

  static addCategory = (categorie, ctx) =>
    instance.post(`${API_URL}/categories/add`, categorie);
}
