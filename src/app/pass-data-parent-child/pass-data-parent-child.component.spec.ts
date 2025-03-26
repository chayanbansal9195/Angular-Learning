import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataParentChildComponent } from './pass-data-parent-child.component';

describe('PassDataParentChildComponent', () => {
  let component: PassDataParentChildComponent;
  let fixture: ComponentFixture<PassDataParentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassDataParentChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDataParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
