// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Importa tus componentes de página/detalle
import { HomeComponent } from './pages/home/home.component'; // Asegúrate que el archivo se llame home.component.ts y la clase HomeComponent
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz: 'http://localhost:4200/'
  { path: 'shop', component: ShopComponent }, // Catálogo de productos: 'http://localhost:4200/shop'
  { path: 'shop/:id', component: ProductDetailComponent }, // Detalle de un producto: 'http://localhost:4200/shop/123'
  { path: 'cart', component: CartComponent }, // Carrito de compras: 'http://localhost:4200/cart'
  { path: 'checkout', component: CheckoutComponent }, // Proceso de checkout: 'http://localhost:4200/checkout'
  { path: '**', component: NotFoundComponent } // Ruta de error (404): cualquier otra URL no válida [cite: 1586]
];
