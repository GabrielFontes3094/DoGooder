import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importando CommonModule

@Component({
  selector: 'app-home-menu',
  standalone: true,
  imports: [CommonModule],  // Adicionando CommonModule aqui
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']  // Corrigido para styleUrls
})
export class HomeMenuComponent {
  activeButton: string = 'Home';  // Armazena o botão ativo

  // Método para definir o botão ativo
  setActiveButton(button: string) {
    this.activeButton = button;
  }

  // Verifica se o botão está ativo
  isActive(button: string): boolean {
    return this.activeButton === button;
  }
}
