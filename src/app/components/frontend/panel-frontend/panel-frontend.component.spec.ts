import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFrontendComponent } from './panel-frontend.component';

describe('PanelFrontendComponent', () => {
  let component: PanelFrontendComponent;
  let fixture: ComponentFixture<PanelFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
