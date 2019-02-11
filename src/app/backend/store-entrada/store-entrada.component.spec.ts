import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreEntradaComponent } from './store-entrada.component';

describe('StoreEntradaComponent', () => {
  let component: StoreEntradaComponent;
  let fixture: ComponentFixture<StoreEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
