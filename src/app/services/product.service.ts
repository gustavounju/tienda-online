// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; // Importa tu modelo Product
import { Observable, of } from 'rxjs'; // Necesitas importar 'of' para crear observables desde datos síncronos [cite: 1673]

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible en toda la aplicación [cite: 1676]
})
export class ProductService {
  // Datos de productos mock [cite: 1678]
  private products: Product[] = [
    { id: 1, name: 'Empanada de Carne', description: 'Docena de empanadas de carne.', price: 2000, image: 'assets/img/empanada_carne.jpg', category: 'EMPANADAS', stock: 100 },
    { id: 2, name: 'Empanada de Pollo', description: 'Docena de empanadas de pollo.', price: 1800, image: 'assets/img/empanada_pollo.jpg', category: 'EMPANADAS', stock: 120 },
    { id: 3, name: 'Coca-Cola 1.5L', description: 'Gaseosa Coca-Cola, botella de 1.5 litros.', price: 900, image: 'assets/img/coca_cola.jpg', category: 'BEBIDAS', stock: 200 },
    { id: 4, name: 'Pizza Muzzarella', description: 'Pizza grande de muzzarella.', price: 4500, image: 'assets/img/pizza_muzzarella.jpg', category: 'PIZZAS', stock: 50 },
    { id: 5, name: 'Sprite 600ml', description: 'Gaseosa Sprite, botella de 600ml.', price: 600, image: 'assets/img/sprite.jpg', category: 'BEBIDAS', stock: 150 },
    // Puedes añadir más productos mock aquí
  ];

  getProducts(): Observable<Product[]> {
    // Devuelve un Observable con la lista de productos mock [cite: 1683]
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    // Busca un producto por su ID y lo devuelve como un Observable [cite: 1686]
    return of(this.products.find(p => p.id === id));
  }
}
