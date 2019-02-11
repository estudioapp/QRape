import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemlistadoComponent } from './itemlistado.component';

describe('ItemlistadoComponent', () => {
  let component: ItemlistadoComponent;
  let fixture: ComponentFixture<ItemlistadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemlistadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemlistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
