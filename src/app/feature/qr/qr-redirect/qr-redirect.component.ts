import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2} from '@angular/core';
import {QrRedirectService} from "./shared/service/qr-redirect.service";
import {QrRedirectInfo} from "./shared/interfaces/qr-redirect-info";
import {TranslationService} from "../../store/store/shared/service/translate.service";
import {reponseJson} from "../../store/store/data-mock";
import {data} from "./shared/data-traslate-mock";

@Component({
  selector: 'app-qr-redirect',
  templateUrl: './qr-redirect.component.html',
  styleUrls: ['./qr-redirect.component.scss'],
  providers: [TranslationService]
})
export class QrRedirectComponent implements OnInit{
  constructor(private translationService: TranslationService, private el: ElementRef, private renderer: Renderer2)  {}
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
  ngOnInit() {
    this.translationService.loadTranslations(data);
  }

  changeLanguage(){
    if (this.currentLanguage === (this.flags.length - 1)) {
      this.currentLanguage = 0;
    } else {
      this.currentLanguage++;
    }
    this.translationService.changeLanguage(this.flags[this.currentLanguage].code);
  }

  currentLanguage: number = 0;

  getCurrentLanguage() {
    return this.flags[this.currentLanguage].image
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const cards = this.el.nativeElement.querySelectorAll('.card');
    const windowHeight = window.innerHeight;

    cards.forEach((card: HTMLElement) => {
      const rect = card.getBoundingClientRect();

      // Comprobar si la parte superior de la tarjeta está en el viewport
      if (rect.top >= 0 && rect.top <= windowHeight) {
        // Agregar la clase 'visible' para activar la animación
        this.renderer.addClass(card, 'visible');
      }
    });
  }
}
