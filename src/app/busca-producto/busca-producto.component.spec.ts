import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaProductoComponent } from './busca-producto.component';

describe('BuscaProductoComponent', () => {
  let component: BuscaProductoComponent;
  let fixture: ComponentFixture<BuscaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
