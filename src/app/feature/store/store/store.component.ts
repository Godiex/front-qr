import {Component, OnInit} from '@angular/core';
import { TranslationService } from './shared/service/translate.service';
import { ActivatedRoute } from '@angular/router';
import { reponseJson } from './data-mock';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [TranslationService]
})
export class StoreComponent implements OnInit{
  infoProduct: any;
  constructor(private translationService: TranslationService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let product = reponseJson.find((product: any) => product.id == id);
    this.setInfo(product);
  }

  private setInfo(product: any) {
    this.translationService.loadTranslations(product.customContent);
    this.infoProduct = product;
  }

  changeLanguage(language: string){
    this.translationService.changeLanguage(language);
  }

  changeProduct(id: number){
    let product = reponseJson.find((product: any) => product.id == id);
    if (product) {
      this.setInfo(product);
    }
  }

}
