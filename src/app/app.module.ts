import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { EstrellaComponent } from './estrella/estrella.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ListaProductoComponent,
    EstrellaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
