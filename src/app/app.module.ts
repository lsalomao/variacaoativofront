import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { PrecoAtivoListComponent } from './views/home/preco-ativo-list/preco-ativo-list.component';
import { PrecoAtivoTableComponent } from './views/home/preco-ativo-list/preco-ativo-table/preco-ativo-table.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe,CurrencyPipe  } from '@angular/common';
import { PrecoAtivoGraficoComponent } from './views/home/preco-ativo-list/preco-ativo-grafico/preco-ativo-grafico.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrecoAtivoListComponent,
    PrecoAtivoTableComponent,
    PrecoAtivoGraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [CommonModule],
  providers: [DatePipe, CurrencyPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
