import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectDataService } from '../../services/project-data.service';

@Component({
  selector: 'app-form-edificio',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-edificio.component.html',
  styleUrls: ['./form-edificio.component.css']
})
export class FormEdificioComponent {
  private fb = inject(FormBuilder);
  private data = inject(ProjectDataService);
  private router = inject(Router);

  form = this.fb.nonNullable.group({
    nombre: '',
    direccion: '',
    piso: '',            // 👈 adicional para edificios
    unidad: '',          // 👈 ejemplo depto/oficina
    fecha: '',
    comentarios: ''
  });

  ngOnInit() {
    const s = this.data.snapshot;
    this.form.patchValue({
      nombre: s.nombre ?? '',
      direccion: s.direccion ?? '',
      piso: s.piso ?? '',
      unidad: s.unidad ?? '',
      fecha: s.fecha ?? '',
      comentarios: s.comentarios ?? ''
    });
  }

next() {
  const v = this.form.getRawValue();
  this.data.setData(v);         // 👈 guarda en el servicio
  this.router.navigate(['/firma']);
}

}