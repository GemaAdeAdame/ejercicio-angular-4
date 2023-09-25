import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personaje3Component } from './personaje3.component';

describe('Personaje3Component', () => {
  let component: Personaje3Component;
  let fixture: ComponentFixture<Personaje3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Personaje3Component]
    });
    fixture = TestBed.createComponent(Personaje3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
