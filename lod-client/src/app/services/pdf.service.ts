// src/app/services/pdf.service.ts
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({ providedIn: 'root' })
export class PdfService {
  // Captura un elemento del DOM y lo descarga como PDF A4
  async fromElement(element: HTMLElement, filename = 'acta-entrega.pdf') {
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const img = canvas.toDataURL('image/png');

    const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
    const w = pdf.internal.pageSize.getWidth();
    const h = (canvas.height * w) / canvas.width;

    pdf.addImage(img, 'PNG', 0, 0, w, h);
    pdf.save(filename);
  }
}
// Servicio para generar y descargar PDFs desde elementos HTML