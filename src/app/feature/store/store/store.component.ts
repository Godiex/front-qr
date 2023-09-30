import { Component } from '@angular/core';
import { TranslationService } from './shared/service/translate.service';
import { ActivatedRoute } from '@angular/router';
import { item1, reponseJson } from './data-mock';

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
    this.setInfo(item1);
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  private setInfo(product: any) {
    this.translationService.loadTranslations(product.customContent);
    this.infoProduct = product;
  }

  changeLanguage(language: string){
    this.translationService.changeLanguage(language);
  }

  changeProduct(id: any){
    let product = reponseJson.find((product: any) => product.id === id);
    if (product) {
      this.setInfo(product);
    }
  }

}
