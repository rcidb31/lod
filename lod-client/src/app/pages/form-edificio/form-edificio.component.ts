import { Component, inject, OnInit } from '@angular/core';
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
export class FormEdificioComponent implements OnInit {
  private fb = inject(FormBuilder);
  private data = inject(ProjectDataService);
  private router = inject(Router);

  // 👇 campos iguales a los de ActaData
  form = this.fb.nonNullable.group({
    recibe: '',
    entrega: '',
    direccion: '',
    comuna: '',
    fecha: '',
    trabajo: '',
    comentarios: ''
  });

  ngOnInit() {
    const s = this.data.snapshot;
    this.form.patchValue({
      recibe: s.recibe ?? '',
      entrega: s.entrega ?? '',
      direccion: s.direccion ?? '',
      comuna: s.comuna ?? '',
      fecha: s.fecha ?? '',
      trabajo: s.trabajo ?? '',
      comentarios: s.comentarios ?? ''
    });
  }

  next() {
    const v = this.form.getRawValue();
    this.data.setData(v);  // guarda en el servicio
    this.router.navigate(['/firma']);
  }
}
