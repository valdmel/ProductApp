import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';

const routes: Routes = [
  {
    path: 'criar',
    component: AdicionarProdutoComponent
  },
  {
    path: 'editar/:id',
    component: EditarProdutoComponent
  },
  {
    path: '',
    component: ListarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
