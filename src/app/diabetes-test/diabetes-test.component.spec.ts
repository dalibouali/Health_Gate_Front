import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesTestComponent } from './diabetes-test.component';

describe('DiabetesTestComponent', () => {
  let component: DiabetesTestComponent;
  let fixture: ComponentFixture<DiabetesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
