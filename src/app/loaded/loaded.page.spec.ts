import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadedPage } from './loaded.page';

describe('LoadedPage', () => {
  let component: LoadedPage;
  let fixture: ComponentFixture<LoadedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
