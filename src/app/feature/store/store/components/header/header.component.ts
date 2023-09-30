import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() logoUrl: string;

  currentLanguage: number = 0;

  flags: Array<any> = [{
    language: 'spanish',
    image: 'assets/colombia-icon.png'
  }, {
    language: 'english',
    image: 'assets/estados-unidos.png'
  }, {
    language: 'Japanese',
    image: 'assets/japon.png'
  }];


  ngOnInit(): void {

  }

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





  }
}
