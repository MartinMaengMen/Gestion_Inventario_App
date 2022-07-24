import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioModificarComponent } from './inventario-modificar.component';

describe('InventarioModificarComponent', () => {
  let component: InventarioModificarComponent;
  let fixture: ComponentFixture<InventarioModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
