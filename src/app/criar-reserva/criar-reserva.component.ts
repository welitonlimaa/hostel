import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reserva } from '../models/reserva';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-criar-reserva',
  templateUrl: './criar-reserva.component.html',
  styleUrls: ['./criar-reserva.component.css']
})
export class CriarReservaComponent implements OnInit {

  reservaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.reservaForm = this.formBuilder.group({
      nomeHospede: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      quantidadePessoas: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    if (this.reservaForm.valid) {
      const novaReserva: Reserva = this.reservaForm.value;
      this.reservaService.createReserva(novaReserva).subscribe(
        () => {
          console.log('Reserva criada com sucesso!');
          this.reservaForm.reset();
        },
        error => {
          console.error('Erro ao criar reserva:', error);
        }
      );
    }
  }
}
