package com.example.SpringMVC.controller;

import com.example.SpringMVC.model.Produto;
import com.example.SpringMVC.services.ProdutoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(ProdutoController.BASE_URL)
public class ProdutoController
{
    public static final String BASE_URL = "/api/loja";
    
    @Autowired
    private ProdutoService produtoService;
    
    @PostMapping("/criar")
    public Produto criarProduto(@RequestBody Produto produto)
    {
        return produtoService.criarProduto(produto);
    }
    
    @GetMapping("/listar")
    public List<Produto> listarProdutos()
    {
        return produtoService.listarProdutos();
    }
    
    @GetMapping("listar/{id}")
    public Produto listarProdutoById(@PathVariable Long id)
    {
        return produtoService.listarProdutoById(id);
    }
    
    @PutMapping("atualizar/")
    public Produto atualizarProduto(@RequestBody Produto produto)
    {
        return produtoService.atualizarProduto(produto);
    }
    
    @DeleteMapping("deletar/{id}")
    public List<Produto> deletarProdutoById(@PathVariable Long id)
    {
        return produtoService.deletarProdutoById(id);
    }
    
    @DeleteMapping("/deletar")
    public List<Produto> deletarProduto(@RequestBody Produto produto)
    {
        return produtoService.deletarProduto(produto);
    }
}