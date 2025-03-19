import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupReactiveComponent } from './form-group-reactive.component';

describe('FormGroupReactiveComponent', () => {
  let component: FormGroupReactiveComponent;
  let fixture: ComponentFixture<FormGroupReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
