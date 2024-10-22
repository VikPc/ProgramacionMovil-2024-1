import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecervaPage } from './recerva.page';

describe('RecervaPage', () => {
  let component: RecervaPage;
  let fixture: ComponentFixture<RecervaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecervaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
