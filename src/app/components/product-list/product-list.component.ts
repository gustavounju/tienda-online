// src/app/components/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core'; // Importa OnInit para el ciclo de vida
import { CommonModule } from '@angular/common'; // Para directivas como *ngFor
import { Observable } from 'rxjs'; // Para manejar Observables del servicio

import { Product } from '../../models/product.model'; // Importa tu modelo Product
import { ProductService } from '../../services/product.service'; // Importa tu ProductService
import { ProductCardComponent } from '../product-card/product-card.component'; // Importa ProductCardComponent

@Component({
  selector: 'app-product-list', // Selector que usarás en el HTML para este componente
  standalone: true, // Declara este componente como standalone
  imports: [CommonModule, ProductCardComponent], // Importa módulos y componentes necesarios
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>; // Un Observable para la lista de productos

  constructor(private productService: ProductService) { } // Inyecta el ProductService

  ngOnInit(): void {
    // Cuando el componente se inicializa, obtiene los productos del servicio
    this.products$ = this.productService.getProducts();
  }
}
