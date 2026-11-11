import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TalleresServicio, Taller } from '../talleres-servicio';

@Component({
  imports: [RouterLink],
  selector: 'app-talleres',
  styleUrl: './talleres.css',
  templateUrl: './talleres.html',
})
export class Talleres {
  talleres: Taller[] = [];

  constructor(private talleresServicio: TalleresServicio) {
    this.talleres = this.talleresServicio.obtenerTalleres();
  }
}