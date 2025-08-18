import { Component, inject } from '@angular/core';
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
export class FormCasaComponent {
  private fb = inject(FormBuilder);
  private data = inject(ProjectDataService);
  private router = inject(Router);

  form = this.fb.nonNullable.group({
    nombre: '', direccion: '', fecha: '', comentarios: ''
  });

  ngOnInit() {
    const s = this.data.snapshot;
    this.form.patchValue({
      nombre: s.nombre ?? '', direccion: s.direccion ?? '',
      fecha: s.fecha ?? '', comentarios: s.comentarios ?? ''
    });
  }

  next() {
    const v = this.form.getRawValue();
    this.data.setData({ tipo: 'casa', ...v });
    this.router.navigateByUrl('/preview');
  }
}
