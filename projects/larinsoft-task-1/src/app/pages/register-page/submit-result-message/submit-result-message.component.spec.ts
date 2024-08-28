import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitResultMessageComponent } from './submit-result-message.component';

describe('SubmitResultMessageComponent', () => {
  let component: SubmitResultMessageComponent;
  let fixture: ComponentFixture<SubmitResultMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitResultMessageComponent]
    });
    fixture = TestBed.createComponent(SubmitResultMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
