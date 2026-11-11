import { TestBed } from '@angular/core/testing';
import { TalleresServicio } from './talleres-servicio';

describe('TalleresServicio', () => {
  let service: TalleresServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalleresServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
