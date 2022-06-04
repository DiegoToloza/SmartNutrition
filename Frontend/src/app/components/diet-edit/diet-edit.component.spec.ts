import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietEditComponent } from './diet-edit.component';

describe('DietEditComponent', () => {
  let component: DietEditComponent;
  let fixture: ComponentFixture<DietEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
