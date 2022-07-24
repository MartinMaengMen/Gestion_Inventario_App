import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioInsertarComponent } from './inventario-insertar.component';

describe('InventarioInsertarComponent', () => {
  let component: InventarioInsertarComponent;
  let fixture: ComponentFixture<InventarioInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioInsertarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
