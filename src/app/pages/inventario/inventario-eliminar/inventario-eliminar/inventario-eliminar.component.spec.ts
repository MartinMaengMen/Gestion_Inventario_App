import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioEliminarComponent } from './inventario-eliminar.component';

describe('InventarioEliminarComponent', () => {
  let component: InventarioEliminarComponent;
  let fixture: ComponentFixture<InventarioEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioEliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
