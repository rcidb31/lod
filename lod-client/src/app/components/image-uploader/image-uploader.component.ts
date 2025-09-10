// src/app/components/image-uploader/image-uploader.component.ts
import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lod-image-uploader',
  standalone: true,
  imports: [CommonModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ImageUploaderComponent),
    multi: true
  }],
  template: `
    <div class="border-2 border-dashed p-6 rounded-xl text-center">
      <input type="file" multiple accept="image/*" hidden #fileInput (change)="onFiles($event)">
      <button type="button" class="px-4 py-2 rounded bg-indigo-600 text-white" (click)="fileInput.click()">
        Subir Fotos
      </button>

      <div *ngIf="urls.length" class="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
        <div *ngFor="let u of urls" class="relative rounded-lg overflow-hidden">
          <img [src]="u" class="object-cover w-full h-32">
        </div>
      </div>
    </div>
  `
})
export class ImageUploaderComponent implements ControlValueAccessor {
  urls: string[] = [];
  private onChange: (files: File[]) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(files: File[] | null): void {
    this.urls = files ? files.map(f => URL.createObjectURL(f)) : [];
  }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  onFiles(e: Event) {
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;
    this.urls = Array.from(files).map(f => URL.createObjectURL(f));
    this.onChange(Array.from(files));
    this.onTouched();
  }
}

