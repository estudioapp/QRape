import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoQRComponent } from './nuevo-qr.component';

describe('NuevoQRComponent', () => {
  let component: NuevoQRComponent;
  let fixture: ComponentFixture<NuevoQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
