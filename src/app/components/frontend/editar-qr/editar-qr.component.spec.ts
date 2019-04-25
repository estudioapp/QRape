import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarQRComponent } from './editar-qr.component';

describe('EditarQRComponent', () => {
  let component: EditarQRComponent;
  let fixture: ComponentFixture<EditarQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
