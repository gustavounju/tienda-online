// src/app/pages/shop/shop.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para directivas comunes de Angular

// Importa tu ProductListComponent porque ShopComponent lo usará en su HTML
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop', // Selector que usarás en el HTML para este componente
  standalone: true, // Declara este componente como standalone
  imports: [CommonModule, ProductListComponent], // Importa módulos y componentes necesarios
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss' // o styleUrls
})
export class ShopComponent {
  // Por ahora, este componente no necesita lógica específica en TypeScript
  // Toda la lógica de obtención y listado de productos está en ProductListComponent
  constructor() { }
}
