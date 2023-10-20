import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationProductComponent } from './information-product.component';

describe('InformationProductComponent', () => {
  let component: InformationProductComponent;
  let fixture: ComponentFixture<InformationProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationProductComponent]
    });
    fixture = TestBed.createComponent(InformationProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
