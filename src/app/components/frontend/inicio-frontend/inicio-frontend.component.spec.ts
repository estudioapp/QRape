import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFrontendComponent } from './inicio-frontend.component';

describe('InicioFrontendComponent', () => {
  let component: InicioFrontendComponent;
  let fixture: ComponentFixture<InicioFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
