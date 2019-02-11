import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoHacerTiendaOnlineComponent } from './como-hacer-tienda-online.component';

describe('ComoHacerTiendaOnlineComponent', () => {
  let component: ComoHacerTiendaOnlineComponent;
  let fixture: ComponentFixture<ComoHacerTiendaOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoHacerTiendaOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoHacerTiendaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
