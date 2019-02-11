import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoitembComponent } from './listadoitemb.component';

describe('ListadoitembComponent', () => {
  let component: ListadoitembComponent;
  let fixture: ComponentFixture<ListadoitembComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoitembComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoitembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
