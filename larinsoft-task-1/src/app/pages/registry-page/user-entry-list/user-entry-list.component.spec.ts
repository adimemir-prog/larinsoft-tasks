import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntryListComponent } from './user-entry-list.component';

describe('UserEntryListComponent', () => {
  let component: UserEntryListComponent;
  let fixture: ComponentFixture<UserEntryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEntryListComponent]
    });
    fixture = TestBed.createComponent(UserEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
