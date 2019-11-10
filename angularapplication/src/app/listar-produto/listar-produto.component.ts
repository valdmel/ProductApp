import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto/produto.service';
import { Produto } from '../models/produto';
import { MatSnackBar, MatDialog } from '@angular/material';
import { EditarProdutoComponent } from '../editar-produto/editar-produto.component';
import { AdicionarProdutoComponent } from '../adicionar-produto/adicionar-produto.component';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {
  public produtos: Produto[];
  public produto = new Produto();
  public colunas = ['Id', 'Nome', 'Descricao', 'Peso', 'Preco', 'Acoes'];

  constructor(private produtoService: ProdutoService, private snackBar: MatSnackBar, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.produtoService.listarProdutos().subscribe(produtos => this.produtos = produtos);
    this.atualizar();
  }

  deletarProduto(id: number) {
    this.abrirSnackBar('Produto excluído!', 'Fechar');

    this.produtoService.deletarProduto(id).subscribe(produtos => this.produtos = produtos);
  }

  abrirSnackBar(mensagem: string, acao?: string) {
    this.snackBar.open(mensagem, acao, {
      duration: 2000
    });
  }

  abrirJanelaEditar(id: number) {
    this.dialog.open(EditarProdutoComponent, {
      width: '500px',
      data: { id: id },
    });
  }

  abrirJanelaCadastrar() {
    this.dialog.open(AdicionarProdutoComponent, {
      width: '500px',
    });
  }

  atualizar(): void {
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
  }
}
