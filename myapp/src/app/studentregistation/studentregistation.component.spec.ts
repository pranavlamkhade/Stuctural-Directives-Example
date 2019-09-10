import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentregistationComponent } from './studentregistation.component';

describe('StudentregistationComponent', () => {
  let component: StudentregistationComponent;
  let fixture: ComponentFixture<StudentregistationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentregistationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentregistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
