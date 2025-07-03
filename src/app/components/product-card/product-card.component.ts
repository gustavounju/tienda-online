// src/app/components/product-card/product-card.component.ts
import { Component, Input } from '@angular/core'; // Importa Input
import { CommonModule } from '@angular/common'; // Para directivas comunes de Angular
import { RouterModule } from '@angular/router'; // Para usar routerLink en el HTML

import { Product } from '../../models/product.model'; // Importa tu modelo Product

@Component({
  selector: 'app-product-card', // Selector que usarás en el HTML para este componente
  standalone: true, // Declara este componente como standalone
  imports: [CommonModule, RouterModule], // Importa módulos necesarios para el template
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss' // o styleUrls
})
export class ProductCardComponent {
  // Usamos el decorador @Input() para recibir un objeto 'product' del componente padre
  @Input() product!: Product; // El '!' indica que se inicializará más tarde (o que se asume que siempre tendrá un valor)

  // El constructor y otros métodos irán aquí si los necesitas
  constructor() { }

  ngOnInit(): void {
    // Este método se ejecuta cuando el componente se inicializa
    // Puedes usarlo para depurar si el producto se está recibiendo
    // console.log('Producto recibido en ProductCard:', this.product);
  }
}
