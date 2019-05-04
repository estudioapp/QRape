import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarContenidoQRComponent } from './agregar-contenido-qr.component';

describe('AgregarContenidoQRComponent', () => {
  let component: AgregarContenidoQRComponent;
  let fixture: ComponentFixture<AgregarContenidoQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarContenidoQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarContenidoQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
