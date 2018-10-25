import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlataformaComponent } from './new-plataforma.component';

describe('NewPlataformaComponent', () => {
  let component: NewPlataformaComponent;
  let fixture: ComponentFixture<NewPlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
