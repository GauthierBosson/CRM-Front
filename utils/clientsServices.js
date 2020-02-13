import axios from "axios";
const API_URL = "http://localhost:3001";

export default class clientsServices {
  static getClients() {
    const url = `${API_URL}/clients`;
    return axios.get(url).then(response => {
      return response.data;
    });
  }

  static getClient(id) {
    const url = `${API_URL}/clients/${id}`;
    return axios.get(url).then(response => {
      return response.data;
    });
  }

  static updateClient(client) {
    const url = `${API_URL}/clients/${client.id}`;
    return axios.update(url).then(response => {
      return response.data;
    });
  }

  static deleteClient(id) {
    const url = `${API_URL}/clients/${id}`;
    return axios.delete(url).then(response => {
      return response.data;
    });
  }

  static addClient = client => axios.post(`${API_URL}/client`, client);
}
