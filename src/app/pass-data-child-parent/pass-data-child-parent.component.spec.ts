import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataChildParentComponent } from './pass-data-child-parent.component';

describe('PassDataChildParentComponent', () => {
  let component: PassDataChildParentComponent;
  let fixture: ComponentFixture<PassDataChildParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassDataChildParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDataChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
