import {Component, OnInit} from '@angular/core';
import {QrRedirectService} from "./shared/service/qr-redirect.service";
import {QrRedirectInfo} from "./shared/interfaces/qr-redirect-info";

@Component({
  selector: 'app-qr-redirect',
  templateUrl: './qr-redirect.component.html',
  styleUrls: ['./qr-redirect.component.scss'],
  providers: [QrRedirectService]
})
export class QrRedirectComponent implements OnInit{
  infoRedirect: QrRedirectInfo;
  baseStyles: any;

  constructor(private readonly qrRedirectService: QrRedirectService) {
    this.infoRedirect = {
      stylesTemplate: { h2: { property : 'custom-property'}, th: { property : 'custom-property'} },
      data: { key: 'value' },
    } as QrRedirectInfo;
    this.baseStyles = {};
  }

   ngOnInit(): void {
    this.qrRedirectService.apiGetDataQr("123").subscribe(data => {
      this.baseStyles = data.stylesTemplate;
      this.infoRedirect = data;
      debugger
    });
  }

}
