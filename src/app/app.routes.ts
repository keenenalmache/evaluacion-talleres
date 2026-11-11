import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Talleres } from './talleres/talleres';
import { DetalleTaller } from './detalle-taller/detalle-taller';
import { Reserva } from './reserva/reserva';
import { Instructores } from './instructores/instructores';
import { AcercaDe } from './acerca-de/acerca-de';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: Inicio,
  },
  {
    path: 'talleres',
    component: Talleres,
  },
  {
    path: 'taller/:id',
    component: DetalleTaller,
  },
  {
    path: 'reserva/:id',
    component: Reserva,
  },
  {
    path: 'instructores',
    component: Instructores,
  },
  {
    path: 'acerca-de',
    component: AcercaDe,
  },
];