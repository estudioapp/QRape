import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginempComponent } from './loginemp.component';

describe('LoginempComponent', () => {
  let component: LoginempComponent;
  let fixture: ComponentFixture<LoginempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
