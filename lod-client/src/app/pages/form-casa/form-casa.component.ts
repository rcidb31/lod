import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PdfService } from '../../services/pdf.service';

@Component({
  standalone: true,
  selector: 'app-form-casa',
  imports: [ReactiveFormsModule],          // ✅ necesario para forms reactivos
  templateUrl: './form-casa.component.html',
  styleUrls: ['./form-casa.component.css']
})
export class FormCasaComponent {
  private fb = inject(FormBuilder);
  private pdf = inject(PdfService);        // ✅ PDF service

  @ViewChild('actaPreview')                // ✅ elemento a capturar
  actaPreview!: ElementRef<HTMLDivElement>;

  form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    fecha: [new Date().toISOString().slice(0, 10), Validators.required],
    recibe: [''],
    entrega: [''],
    comentarios: ['']
  });

  // ✅ genera el PDF capturando el preview
  async onGeneratePdf() {
    if (!this.actaPreview?.nativeElement) return;
    await this.pdf.fromElement(
      this.actaPreview.nativeElement,
      `acta_${this.form.value.nombre || 'casa'}.pdf`
    );
  }
}
// Componente para el formulario y vista previa del acta de entrega