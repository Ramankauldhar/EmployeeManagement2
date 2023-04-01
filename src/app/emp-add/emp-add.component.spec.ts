import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddComponent } from './emp-add.component';

describe('EmpAddComponent', () => {
  let component: EmpAddComponent;
  let fixture: ComponentFixture<EmpAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
