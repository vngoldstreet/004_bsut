import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMedicalappointmentComponent } from './c-medicalappointment.component';

describe('CMedicalappointmentComponent', () => {
  let component: CMedicalappointmentComponent;
  let fixture: ComponentFixture<CMedicalappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMedicalappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMedicalappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
