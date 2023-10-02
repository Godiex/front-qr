import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QrRedirectService} from "./shared/service/qr-redirect.service";
import {QrRedirectInfo} from "./shared/interfaces/qr-redirect-info";

@Component({
  selector: 'app-qr-redirect',
  templateUrl: './qr-redirect.component.html',
  styleUrls: ['./qr-redirect.component.scss'],
  providers: [QrRedirectService]
})
export class QrRedirectComponent{
  constructor()  {}

  currentLanguage: number = 0;

  flags: Array<any> = [{
    language: 'spanish',
    code: 'es',
    image: 'assets/colombia-icon.png'
  }, {
    language: 'english',
    code: 'en',
    image: 'assets/estados-unidos.png'
  }, {
    language: 'Japanese',
    code: 'ja',
    image: 'assets/japon.png'
  }];

  getCurrentLanguage() {
    return this.flags[this.currentLanguage].image
  }

  changeLanguage() {
    if (this.currentLanguage === (this.flags.length - 1)) {
      this.currentLanguage = 0;
    } else {
      this.currentLanguage++;
    }
  }
}
