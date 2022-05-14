import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbisComponent } from './registerbis.component';

describe('RegisterbisComponent', () => {
  let component: RegisterbisComponent;
  let fixture: ComponentFixture<RegisterbisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterbisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
