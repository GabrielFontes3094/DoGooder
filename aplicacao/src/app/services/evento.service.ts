import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/Eventos.models';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = 'https://localhost:5257/api/Eventos'; // Ajuste conforme necessário

  constructor(private http: HttpClient) {}

  criarEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.apiUrl, evento);
  }
}
