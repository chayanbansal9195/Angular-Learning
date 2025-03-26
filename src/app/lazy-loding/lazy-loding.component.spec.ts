import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLodingComponent } from './lazy-loding.component';

describe('LazyLodingComponent', () => {
  let component: LazyLodingComponent;
  let fixture: ComponentFixture<LazyLodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyLodingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
