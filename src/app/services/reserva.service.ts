import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private apiUrl = environment.baseURL;

  constructor(private http: HttpClient) { }

  createReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(`${this.apiUrl}/reservas`, reserva);
  }

  getAllReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.apiUrl}/reservas`);
  }

  getReservaById(id: number): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.apiUrl}/reservas/${id}`);
  }

  updateReserva(id: number, reserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(`${this.apiUrl}/reservas/${id}`, reserva);
  }

  cancelReserva(id: number): Observable<Reserva> {
    return this.http.delete<Reserva>(`${this.apiUrl}/reservas/${id}/cancelar`);
  }
}
