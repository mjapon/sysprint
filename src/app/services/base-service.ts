import {throwError} from 'rxjs';
import swal from 'sweetalert2';

export class BaseService {

  private baseUrlEndPoint = 'http://localhost:6543/rest';
  protected urlEndPoint: string;

  constructor(urlPath: string) {
    this.urlEndPoint = this.baseUrlEndPoint + urlPath;
  }

  protected buildUrlEndPoint(path: string): string {
    return this.urlEndPoint + path;
  }

  protected getHttpOptions(params): any {
    return {
      headers: {'Content-Type': 'application/json'},
      params: params
    };
  }

  protected fnProcesaError(e) {
    console.log('Entra en fnProcesaError error que llega es');
    console.log(e);
    if (e.status === 400) {
      //return throwError(e);
    }
    if (e.error.msg) {
      swal.fire('Error al procesar petición', e.error.msg, 'error');
    } else {
      swal.fire('Error al procesar petición', e.message, 'error');
    }
    return throwError(e);
  }


}

