import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEntradaComponent } from './listado-entrada.component';

describe('ListadoEntradaComponent', () => {
  let component: ListadoEntradaComponent;
  let fixture: ComponentFixture<ListadoEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
