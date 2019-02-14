import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemalbumComponent } from './itemalbum.component';

describe('ItemalbumComponent', () => {
  let component: ItemalbumComponent;
  let fixture: ComponentFixture<ItemalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
