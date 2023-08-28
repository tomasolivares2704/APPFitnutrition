import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrossEjerciciosPage } from './cross-ejercicios.page';

describe('CrossEjerciciosPage', () => {
  let component: CrossEjerciciosPage;
  let fixture: ComponentFixture<CrossEjerciciosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrossEjerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
