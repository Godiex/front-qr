import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent {
  @Input() productsMayAlsoLike = [{"photoUrl": "", "id": 0}];
  @Output() eventChangeProduct: EventEmitter<number> = new EventEmitter();

  callFunctionChangeProduct(id: number) {
    this.eventChangeProduct.emit(id);
  }
}
