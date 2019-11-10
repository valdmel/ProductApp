package com.example.SpringMVC.services;

import com.example.SpringMVC.model.Produto;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface ProdutoService
{
    Produto criarProduto(Produto produto);
    Produto listarProdutoById(Long id);
    List<Produto> listarProdutos();
    Produto atualizarProduto(Produto produto);
    List<Produto> deletarProdutoById(Long id);
    List<Produto> deletarProduto(Produto produto);
}