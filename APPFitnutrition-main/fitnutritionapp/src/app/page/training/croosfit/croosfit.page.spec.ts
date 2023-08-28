import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CroosfitPage } from './croosfit.page';

describe('CroosfitPage', () => {
  let component: CroosfitPage;
  let fixture: ComponentFixture<CroosfitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CroosfitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
