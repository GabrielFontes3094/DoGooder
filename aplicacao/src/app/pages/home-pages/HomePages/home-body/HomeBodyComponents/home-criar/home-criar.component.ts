import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EventoService } from '../../../../../../services/evento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-criar',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule], 
  templateUrl: './home-criar.component.html',
  styleUrls: ['./home-criar.component.scss']
})
export class HomeCriarComponent {
  eventoForm: FormGroup;

  constructor(private fb: FormBuilder, private eventoService: EventoService) {
    this.eventoForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      local: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventoForm.valid) {
      this.eventoService.criarEvento(this.eventoForm.value).subscribe({
        next: () => alert('Evento criado com sucesso!'),
        error: () => alert('Erro ao criar evento.')
      });
    }
  }
}
