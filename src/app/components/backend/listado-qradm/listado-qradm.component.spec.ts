import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoQRadmComponent } from './listado-qradm.component';

describe('ListadoQRadmComponent', () => {
  let component: ListadoQRadmComponent;
  let fixture: ComponentFixture<ListadoQRadmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoQRadmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoQRadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
