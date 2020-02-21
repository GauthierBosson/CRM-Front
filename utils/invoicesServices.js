import axios from "axios";
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';
const FileDownload = require('js-file-download');

const API_URL = process.env.API_URL || 'http://localhost:3001/api/v1';

export default class invoiceServices {
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

  static generateInvoice(id, command) {
    const instance = axios.create({
      headers: {
        'Authorization': 'Bearer ' + cookie.get('token'),
        'Content-Type': 'application/pdf',
      },
      responseType: 'blob'
    });
    const url = `${API_URL}/bills/create/invoice/${id}`;
    return instance.post(url, command).then(response => {
      FileDownload(response.data, 'testinvoice.pdf');
    });
  }
}
