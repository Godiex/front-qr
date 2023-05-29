import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrUserComponent } from './qr-user.component';

describe('QrUserComponent', () => {
  let component: QrUserComponent;
  let fixture: ComponentFixture<QrUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrUserComponent]
    });
    fixture = TestBed.createComponent(QrUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
