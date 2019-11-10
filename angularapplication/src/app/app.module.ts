import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoService } from './services/produto/produto.service';
import { ConfigService } from './services/config/config.service';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Material from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarProdutoComponent,
    ListarProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Material.MatFormFieldModule,
    Material.MatTableModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatTooltipModule,
    Material.MatInputModule,
    Material.MatSnackBarModule,
    Material.MatToolbarModule,
    Material.MatCardModule,
    Material.MatDialogModule
  ],
  providers: [
    ConfigService,
    ProdutoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
