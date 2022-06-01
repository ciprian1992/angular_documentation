import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCardComponent } from './lib-card.component';

describe('LibCardComponent', () => {
  let component: LibCardComponent;
  let fixture: ComponentFixture<LibCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
