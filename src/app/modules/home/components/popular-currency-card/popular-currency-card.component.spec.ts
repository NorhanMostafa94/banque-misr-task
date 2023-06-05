import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCurrencyCardComponent } from './popular-currency-card.component';

describe('PopularCurrencyCardComponent', () => {
  let component: PopularCurrencyCardComponent;
  let fixture: ComponentFixture<PopularCurrencyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCurrencyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCurrencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
