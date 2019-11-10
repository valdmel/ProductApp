import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../services/produto/produto.service';
import { Produto } from '../models/produto';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {
  public formGroup = this.formBuilder.group({
    Nome: ['', Validators.required],
    Descricao: ['', Validators.required],
    Peso: ['', Validators.required],
    Preco: ['', Validators.required]
  });
  public produto = new Produto();

  constructor(private formBuilder: FormBuilder, private produtoService: ProdutoService, private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<AdicionarProdutoComponent>) {
  }

  ngOnInit() {
    this.formGroup.reset();
  }

  adicionarProduto(produto: Produto) {
    this.abrirSnackBar('Produto adicionado!', 'Fechar');

    this.produtoService.adicionarProduto(produto).subscribe();

    this.dialogRef.close();
  }

  abrirSnackBar(mensagem: string, acao?: string) {
    this.snackBar.open(mensagem, acao, {
      duration: 2000
    });
  }
}
