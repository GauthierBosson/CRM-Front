import axios from "axios";
const API_URL = "http://localhost:3001";

export default class categoriesServices {
  static getCategorie() {
    const url = `${API_URL}/categories`;
    return axios.get(url).then(response => {
      return response.data;
    });
  }

  static getCategorie(id) {
    const url = `${API_URL}/categories/${id}`;
    return axios.get(url).then(response => {
      return response.data;
    });
  }

  static updateCategorie(categorie) {
    const url = `${API_URL}/categories/${categorie.id}`;
    return axios.update(url).then(response => {
      return response.data;
    });
  }

  static deleteCategorie(id) {
    const url = `${API_URL}/categories/${id}`;
    return axios.delete(url).then(response => {
      return response.data;
    });
  }

  static addCategorie = categorie =>
    axios.post(`${API_URL}/categories`, categorie);
}
