import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleTaller } from './detalle-taller';

describe('DetalleTaller', () => {
  let component: DetalleTaller;
  let fixture: ComponentFixture<DetalleTaller>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTaller],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleTaller);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
