import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaDeEntradasComponent } from './venta-de-entradas.component';

describe('VentaDeEntradasComponent', () => {
  let component: VentaDeEntradasComponent;
  let fixture: ComponentFixture<VentaDeEntradasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaDeEntradasComponent]
    });
    fixture = TestBed.createComponent(VentaDeEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
