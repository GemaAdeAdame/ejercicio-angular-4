import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personaje1Component } from './personaje1.component';

describe('Personaje1Component', () => {
  let component: Personaje1Component;
  let fixture: ComponentFixture<Personaje1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Personaje1Component]
    });
    fixture = TestBed.createComponent(Personaje1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
