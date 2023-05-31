import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import { QrRedirectInfo } from '../interfaces/qr-redirect-info';
import {HttpService} from "@core/services/http.service";
import {environment} from "@env/environment";


@Injectable()
export class QrRedirectService {

  constructor(protected http: HttpService) { }

  public apiGetDataQr(qrId: string): Observable<QrRedirectInfo>{
    return this.http.doGet(`${environment.appUrl}qr/${qrId}`)
      .pipe(map((response: any) => response as QrRedirectInfo));
  }
}
