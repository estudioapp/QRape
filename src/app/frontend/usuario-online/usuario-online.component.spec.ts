import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioOnlineComponent } from './usuario-online.component';

describe('UsuarioOnlineComponent', () => {
  let component: UsuarioOnlineComponent;
  let fixture: ComponentFixture<UsuarioOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
