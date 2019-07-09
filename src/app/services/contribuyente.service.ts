import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import swal from 'sweetalert2';
import {catchError, map} from 'rxjs/operators';
import {ContribsResp} from '../model/contribs';

@Injectable({
  providedIn: 'root'
})
export class ContribuyenteService {

  private urlEndPoint = 'http://localhost:6543/rest/contribuyente';

  constructor(private http: HttpClient) {

  }

  findByNui(nui: string): Observable<ContribsResp> {

    const endpoint = this.urlEndPoint + '/0';
    const params = new HttpParams()
      .set('nui', nui);

    return this.http
      .get(endpoint, {'params': params})
      .pipe(map((response: any) => response.sedipres as ContribsResp),
        catchError(this.fnProcesaError)
      );
  }

  listar(): Observable<ContribsResp> {

    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response: any) => {
          console.log('Respuesta del servidor:');
          console.log(response);
          return response as ContribsResp;
        }),
        catchError(this.fnProcesaError)
      );
  }

  fnProcesaError(e) {
    if (e.status === 400) {
      return throwError(e);
    }
    if (e.error.mensaje) {
      swal.fire('Error al procesar petición', e.error.mensaje, 'error');
    }
    return throwError(e);
  }

}
