import { Component } from '@angular/core';
import { TranslationService } from './shared/service/translate.service';
import { ActivatedRoute } from '@angular/router';
import { item1 } from './data-mock';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [TranslationService]
})
export class StoreComponent {
  infoProduct: any;
  constructor(private translationService: TranslationService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.translationService.loadTranslations(item1.customContent);
    this.infoProduct = item1;
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  changeLanguage(language: string){
    this.translationService.changeLanguage(language);
  }

}
