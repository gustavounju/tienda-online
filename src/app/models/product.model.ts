// src/app/models/product.model.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; // Esto representará urlImagen de tu backend
  category: string; // Esto representará categoriaId de tu backend (lo adaptaremos luego)
  // Agregamos stock aquí para que coincida con tu backend
  stock?: number; // Es opcional porque no siempre se usa en todos los contextos del frontend
}
