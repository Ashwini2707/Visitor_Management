import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvisitorsComponent } from './myvisitors.component';

describe('MyvisitorsComponent', () => {
  let component: MyvisitorsComponent;
  let fixture: ComponentFixture<MyvisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
