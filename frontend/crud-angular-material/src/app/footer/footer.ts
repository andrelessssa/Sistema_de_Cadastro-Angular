import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // 👈 1. Importe a Toolbar
import { MatIconModule } from '@angular/material/icon';       // 👈 2. Importe o Ícone

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbarModule, // 👈 3. Adicione aqui
    MatIconModule     // 👈 4. E aqui
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  // Lógica do rodapé
}