import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotenidoComponent } from './cotenido.component';

describe('CotenidoComponent', () => {
  let component: CotenidoComponent;
  let fixture: ComponentFixture<CotenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
