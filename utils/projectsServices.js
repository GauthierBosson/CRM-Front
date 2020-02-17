import axios from "axios";
import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

const API_URL = "http://localhost:3001/api/v1";

export default class projectsServices {
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

  static getProjects(ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/projects`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static getCategory(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/projects/${id}`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static updateProject(project, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/projects/${project.id}`;
    return instance.patch(url).then(response => {
      return response.data;
    });
  }

  static deleteProject(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/projects/${id}`;
    return instance.delete(url).then(response => {
      return response.data;
    });
  }

  static addProject = (project) => {
    const token = cookie.get('token');
    const instance = axios.create({
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    return instance.post(`${API_URL}/projects/add`, project)
      .then(response => response.data);
  }
}