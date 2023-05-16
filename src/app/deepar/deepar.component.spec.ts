import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepARComponent } from './deepar.component';

describe('DeepARComponentComponent', () => {
  let component: DeepARComponent;
  let fixture: ComponentFixture<DeepARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
