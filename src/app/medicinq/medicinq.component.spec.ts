import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinqComponent } from './medicinq.component';

describe('MedicinqComponent', () => {
  let component: MedicinqComponent;
  let fixture: ComponentFixture<MedicinqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
