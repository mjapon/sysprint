import {Injectable} from '@angular/core';
import swal, {SweetAlertType} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() {
  }

  showMsg(msg: string, type: any, title: string = 'Mensaje') {
    swal.fire(title, msg, type);
  }

  fireInfo(msg, title: string = 'Mensaje') {
    this.showMsg(msg, 'info', title);
  }

  fireSuccess(msg, title: string = 'Mensaje') {
    this.showMsg(msg, 'success', title);
  }

  fireWarning(msg, title: string = 'Mensaje') {
    this.showMsg(msg, 'warning', title);
  }

  fireError(msg, title: string = 'Mensaje') {
    this.showMsg(msg, 'error', title);
  }

}
