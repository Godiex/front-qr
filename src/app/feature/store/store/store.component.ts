import { Component } from '@angular/core';
import { TranslationService } from './shared/service/translate.service';
import { translationsJson } from './data-mock';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [TranslationService]
})
export class StoreComponent {
  constructor(private translationService: TranslationService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.translationService.loadTranslations(translationsJson);
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  changeLanguage(language: string){
    this.translationService.changeLanguage(language);
  }

}
