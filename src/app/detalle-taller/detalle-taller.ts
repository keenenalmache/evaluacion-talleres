import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TalleresServicio, Taller } from '../talleres-servicio';

@Component({
  imports: [RouterLink],
  selector: 'app-detalle-taller',
  styleUrl: './detalle-taller.css',
  templateUrl: './detalle-taller.html',
})
export class DetalleTaller {
  taller: Taller | undefined;

  constructor(private ruta: ActivatedRoute, private talleresServicio: TalleresServicio) {
    const id = Number(this.ruta.snapshot.paramMap.get('id'));
    this.taller = this.talleresServicio.buscarTaller(id);
  }
}