import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class TranslationService {
  translations: any;
  constructor(private translate: TranslateService) { }

  loadTranslations(translations: any) {
    this.translations = translations;
    const lang = this.translate.currentLang || 'es';
    if (translations && Array.isArray(translations)) {
      const languageData = translations.find((language: any) => language.languageCode === lang);
      if (languageData && languageData.content) {
        this.translate.setTranslation(lang, languageData.content);
        this.translate.use(lang);
      } else {
        console.warn(`No se encontraron traducciones para el idioma "${lang}".`);
      }
    } else {
      console.warn('El objeto de traducción no contiene el arreglo "languages".');
    }
  }

  changeLanguage(lang: string) {
    const languageData = this.translations.find((language: any) => language.languageCode === lang);
      if (languageData && languageData.content) {
        this.translate.setTranslation(lang, languageData.content);
        this.translate.use(lang);
      } else {
        console.warn(`No se encontraron traducciones para el idioma "${lang}".`);
      }
  }
  
}
