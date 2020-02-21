import axios from "axios";
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

const API_URL = process.env.API_URL || 'http://localhost:3001/api/v1';

export default class commandsServices {
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

  static getCommands(ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/commands`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static getCommandsByProject(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/commands/project/${id}`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static getCommand(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/commands/${id}`;
    return instance.get(url).then(response => {
      return response.data;
    });
  }

  static updateCommand(command, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/commands/${command.id}`;
    return instance.update(url).then(response => {
      return response.data;
    });
  }

  static deleteCommand(id, ctx) {
    const instance = this.createInstance(ctx);
    const url = `${API_URL}/commands/${id}`;
    return instance.delete(url).then(response => {
      return response.data;
    });
  }

  static addCommand = (command) => {
    const instance = axios.create({
      headers: {
        'Authorization': 'Bearer ' + cookie.get('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    return instance.post(`${API_URL}/commands/add`, command)
      .then(response => response.data);
  }
}
