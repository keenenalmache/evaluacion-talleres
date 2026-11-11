import { Service } from '@angular/core';

export interface Taller {
  id: number;
  nombre: string;
  categoria: string;
  duracion: string;
  modalidad: string;
  costo: number;
  cupos: number;
  instructor: string;
  descripcion: string;
}

@Service()
export class TalleresServicio {
  talleres: Taller[] = [
    {
      id: 1,
      nombre: 'Desarrollo web con Angular',
      categoria: 'Desarrollo web',
      duracion: '30 horas',
      modalidad: 'Híbrida',
      costo: 120,
      cupos: 12,
      instructor: 'Ing. Carlos Almache',
      descripcion: 'Aprenderás a crear aplicaciones web con componentes, rutas y servicios.'
    },
    {
      id: 2,
      nombre: 'Introducción a Python',
      categoria: 'Programación',
      duracion: '20 horas',
      modalidad: 'Virtual',
      costo: 60,
      cupos: 15,
      instructor: 'Ing. Bianca Celo',
      descripcion: 'Taller para aprender las bases de la programación con Python.'
    },
    {
      id: 3,
      nombre: 'Diseño de interfaces con Bootstrap',
      categoria: 'Diseño web',
      duracion: '15 horas',
      modalidad: 'Presencial',
      costo: 50,
      cupos: 10,
      instructor: 'Ing. Jonathan Espinoza',
      descripcion: 'Aprenderás a diseñar páginas ordenadas y responsive usando Bootstrap.'
    },
    {
      id: 4,
      nombre: 'Bases de datos con MySQL',
      categoria: 'Bases de datos',
      duracion: '25 horas',
      modalidad: 'Presencial',
      costo: 80,
      cupos: 0,
      instructor: 'Mgtr. Joselyn Mascote',
      descripcion: 'Taller para crear tablas y hacer consultas básicas con MySQL.'
    },
    {
      id: 5,
      nombre: 'Redes y seguridad básica',
      categoria: 'Redes',
      duracion: '20 horas',
      modalidad: 'Virtual',
      costo: 70,
      cupos: 8,
      instructor: 'Ing. Jaden Valarezo',
      descripcion: 'Conceptos básicos de redes y buenas prácticas de seguridad.'
    }
  ];

  obtenerTalleres(): Taller[] {
    return this.talleres;
  }

  buscarTaller(id: number): Taller | undefined {
    return this.talleres.find(taller => taller.id === id);
  }
}