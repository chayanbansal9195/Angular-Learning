import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindComponent } from './two-way-bind.component';

describe('TwoWayBindComponent', () => {
  let component: TwoWayBindComponent;
  let fixture: ComponentFixture<TwoWayBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
