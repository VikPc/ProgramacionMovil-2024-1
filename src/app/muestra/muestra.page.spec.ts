import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuestraPage } from './muestra.page';
import { IonicModule } from '@ionic/angular';


describe('MuestraPage', () => {
  let component: MuestraPage;
  let fixture: ComponentFixture<MuestraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuestraPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuestraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
