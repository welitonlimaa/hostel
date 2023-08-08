import { Component, OnInit } from '@angular/core';
import { Reserva } from '../models/reserva';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.css']
})
export class ListarReservasComponent implements OnInit {

  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.carregarReservas();
  }

  carregarReservas(): void {
    this.reservaService.getAllReservas().subscribe(
      reservas => {
        this.reservas = reservas;
      },
      error => {
        console.error('Erro ao carregar reservas:', error);
      }
    );
  }

  atualizarReserva(id: number): void {
    const reserva = this.reservas.find(r => r.id === id);
    if (reserva) {
      reserva.status = 'PENDENTE';
      this.reservaService.updateReserva(id, reserva).subscribe(
        () => {
          console.log('Reserva atualizada com sucesso!');
        },
        error => {
          console.error('Erro ao atualizar reserva:', error);
        }
      );
    }
  }

  cancelarReserva(id: number): void {
    this.reservaService.cancelReserva(id).subscribe(
      () => {
        console.log('Reserva cancelada com sucesso!');
        this.carregarReservas();
      },
      error => {
        console.error('Erro ao cancelar reserva:', error);
      }
    );
  }
}
