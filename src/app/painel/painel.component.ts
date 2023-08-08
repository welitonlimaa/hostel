import { Component, OnInit } from '@angular/core';
import { Reserva } from '../models/reserva';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  selectedStatus: string = 'CONFIRMADA';
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.listarReservasPorStatus();
  }

  listarReservasPorStatus(): void {
    this.reservaService.getReservasByStatus(this.selectedStatus).subscribe(
      reservas => {
        this.reservas = reservas;
      },
      error => {
        console.error('Erro ao carregar reservas por status:', error);
      }
    );
  }
}
