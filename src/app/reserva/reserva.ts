import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TalleresServicio, Taller } from '../talleres-servicio';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-reserva',
  styleUrl: './reserva.css',
  templateUrl: './reserva.html',
})
export class Reserva {
  taller: Taller | undefined;
  formulario: FormGroup;
  reservaConfirmada = false;
  nombreReserva = '';
  modalidadReserva = '';

  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private talleresServicio: TalleresServicio
  ) {
    const id = Number(this.ruta.snapshot.paramMap.get('id'));
    this.taller = this.talleresServicio.buscarTaller(id);

    this.formulario = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(5)]],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      modalidad: ['', Validators.required],
      tallerId: [this.taller ? this.taller.id : '', Validators.required],
      aceptaTerminos: [false, Validators.requiredTrue]
    });
  }

  campoInvalido(nombre: string) {
    const campo = this.formulario.get(nombre);
    return campo?.invalid && campo?.touched;
  }

  tieneError(nombre: string, error: string) {
    const campo = this.formulario.get(nombre);
    return campo?.touched && campo.hasError(error);
  }

  confirmar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.nombreReserva = this.formulario.value.nombreCompleto;
    this.modalidadReserva = this.formulario.value.modalidad;
    this.reservaConfirmada = true;
  }
}