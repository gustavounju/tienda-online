import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // <--- ¡AÑADE ESTA IMPORTACIÓN!

// Importa tus componentes navbar y footer
import { NavbarComponent } from './components/navbar/navbar.component'; // <--- ¡AÑADE ESTA IMPORTACIÓN!
import { FooterComponent } from './components/footer/footer.component'; // <--- ¡AÑADE ESTA IMPORTACIÓN!

@Component({
  selector: 'app-root',
  standalone: true, // Esto confirma que es un componente standalone
  imports: [
    RouterOutlet,
    CommonModule,     // <--- ¡AÑADE CommonModule aquí!
    NavbarComponent,  // <--- ¡AÑADE NavbarComponent aquí!
    FooterComponent   // <--- ¡AÑADE FooterComponent aquí!
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' // o styleUrls
})
export class AppComponent {
  protected title = 'tienda-online';
}
