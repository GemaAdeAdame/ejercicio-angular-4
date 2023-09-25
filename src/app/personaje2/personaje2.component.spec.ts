import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personaje2Component } from './personaje2.component';

describe('Personaje2Component', () => {
  let component: Personaje2Component;
  let fixture: ComponentFixture<Personaje2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Personaje2Component]
    });
    fixture = TestBed.createComponent(Personaje2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
