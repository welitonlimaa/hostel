import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarReservaComponent } from './criar-reserva.component';

describe('CriarReservaComponent', () => {
  let component: CriarReservaComponent;
  let fixture: ComponentFixture<CriarReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarReservaComponent]
    });
    fixture = TestBed.createComponent(CriarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
