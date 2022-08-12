import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBubbleComponent } from './progress-bubble.component';

describe('ProgressBubbleComponent', () => {
  let component: ProgressBubbleComponent;
  let fixture: ComponentFixture<ProgressBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBubbleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
