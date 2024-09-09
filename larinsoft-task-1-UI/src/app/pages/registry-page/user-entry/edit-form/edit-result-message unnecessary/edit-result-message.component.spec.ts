import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResultMessageComponent } from './edit-result-message.component';

describe('EditResultMessageComponent', () => {
  let component: EditResultMessageComponent;
  let fixture: ComponentFixture<EditResultMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditResultMessageComponent]
    });
    fixture = TestBed.createComponent(EditResultMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
