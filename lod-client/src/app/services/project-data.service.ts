import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ActaData {
  tipo: 'casa' | 'edificio' | 'obra-civil' | 'local-comercial' | null;
  nombre?: string;
  direccion?: string;
  fecha?: string;
  comentarios?: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectDataService {
  private _data = new BehaviorSubject<ActaData>({ tipo: null });
  data$ = this._data.asObservable();

  setData(partial: Partial<ActaData>) {
    this._data.next({ ...this._data.value, ...partial });
  }
  get snapshot(){ return this._data.value; }
  reset(){ this._data.next({ tipo: null }); }
}
