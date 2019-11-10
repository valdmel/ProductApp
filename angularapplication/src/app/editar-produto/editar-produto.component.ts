import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProdutoService } from '../services/produto/produto.service';
import { Produto } from '../models/produto';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  public formGroup = this.formBuilder.group({
    Nome: ['', Validators.required],
    Descricao: ['', Validators.required],
    Peso: ['', Validators.required],
    Preco: ['', Validators.required]
  });
  public produto = new Produto();

  constructor(private produtoService: ProdutoService, private formBuilder: FormBuilder, private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<EditarProdutoComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.produtoService.listarProdutoById(data.id).subscribe(produto => this.produto = produto)
  }

  ngOnInit() {
    this.formGroup.reset();
  }

  atualizarProduto(produto: Produto) {
    this.abrirSnackBar('Produto atualizado!', 'Fechar');

    this.produtoService.atualizarProduto(produto).subscribe();

    this.dialogRef.close();
  }

  abrirSnackBar(mensagem: string, acao?: string) {
    this.snackBar.open(mensagem, acao, {
      duration: 2000
    });
  }
}
