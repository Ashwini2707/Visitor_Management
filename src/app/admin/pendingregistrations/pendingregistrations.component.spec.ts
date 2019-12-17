import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingregistrationsComponent } from './pendingregistrations.component';

describe('PendingregistrationsComponent', () => {
  let component: PendingregistrationsComponent;
  let fixture: ComponentFixture<PendingregistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingregistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingregistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
