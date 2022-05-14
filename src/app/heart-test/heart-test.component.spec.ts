import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartTestComponent } from './heart-test.component';

describe('HeartTestComponent', () => {
  let component: HeartTestComponent;
  let fixture: ComponentFixture<HeartTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
