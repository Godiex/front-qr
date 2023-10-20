import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() logoUrl: string;
  @Output() eventChangeLanguage: EventEmitter<string> = new EventEmitter();

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
  constructor() {
    this.logoUrl = "";
  }

  getCurrentLanguage() {
    return this.flags[this.currentLanguage].image
  }

  changeLanguage() {
    if (this.currentLanguage === (this.flags.length - 1)) {
      this.currentLanguage = 0;
    } else {
      this.currentLanguage++;
    }
    this.eventChangeLanguage.emit(this.flags[this.currentLanguage].code);
  }
}
