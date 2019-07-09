import {Injectable} from '@angular/core';
import swal, {SweetAlertType} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() {
  }

  showMsg(msg: string, type: any) {
    swal.fire('Mensaje', msg, type);
  }

  fireInfo(msg) {
    this.showMsg(msg, 'info');
  }

  fireSuccess(msg) {
    this.showMsg(msg, 'success');
  }

  fireWarning(msg) {
    this.showMsg(msg, 'warning');
  }

  fireError(msg) {
    this.showMsg(msg, 'error');
  }

}
