import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectDataService } from '../../services/project-data.service';

@Component({
  selector: 'app-form-casa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-casa.component.html',
  styleUrls: ['./form-casa.component.css']
})
export class FormCasaComponent implements OnInit {
  private fb = inject(FormBuilder);
  private data = inject(ProjectDataService);
  private router = inject(Router);

  // ✅ declaramos el formulario
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
    recibe: (s as any).recibe ?? '',
    entrega: (s as any).entrega ?? '',
    direccion: s.direccion ?? '',
    comuna: (s as any).comuna ?? '',
    fecha: s.fecha ?? '',
    trabajo: (s as any).trabajo ?? '',
    comentarios: s.comentarios ?? ''
  });
}


  next() {
    if (this.form.valid) {
      const v = this.form.getRawValue();
      this.data.setData({ tipo: 'casa', ...v });
      this.router.navigateByUrl('/preview'); // 👈 va a la vista previa
    }
  }

  goHome() {
    this.router.navigate(['/']); // 👈 vuelve al home
  }
}

