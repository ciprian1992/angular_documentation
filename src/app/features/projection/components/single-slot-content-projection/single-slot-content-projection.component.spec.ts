import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotContentProjectionComponent } from './single-slot-content-projection.component';

describe('SingleSlotContentProjectionComponent', () => {
  let component: SingleSlotContentProjectionComponent;
  let fixture: ComponentFixture<SingleSlotContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSlotContentProjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSlotContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
