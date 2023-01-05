import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSliderComponent } from './c-slider.component';

describe('CSliderComponent', () => {
  let component: CSliderComponent;
  let fixture: ComponentFixture<CSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
