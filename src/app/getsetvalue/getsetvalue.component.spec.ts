import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsetvalueComponent } from './getsetvalue.component';

describe('GetsetvalueComponent', () => {
  let component: GetsetvalueComponent;
  let fixture: ComponentFixture<GetsetvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetsetvalueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetsetvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
