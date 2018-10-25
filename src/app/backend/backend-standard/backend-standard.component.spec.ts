import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendStandardComponent } from './backend-standard.component';

describe('BackendStandardComponent', () => {
  let component: BackendStandardComponent;
  let fixture: ComponentFixture<BackendStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
