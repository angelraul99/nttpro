import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliticaComponent} from './Politica.component';
 
describe('PoliticaComponent', () => {
  let component: PoliticaComponent;
  let fixture: ComponentFixture<PoliticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});