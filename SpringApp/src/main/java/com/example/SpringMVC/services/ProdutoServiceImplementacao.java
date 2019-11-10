package com.example.SpringMVC.services;

import com.example.SpringMVC.model.Produto;
import com.example.SpringMVC.repositories.ProdutoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdutoServiceImplementacao implements ProdutoService
{
    @Autowired
    private ProdutoRepository ProdutoRepository;

    @Override
    public Produto criarProduto(Produto produto)
    {
        return ProdutoRepository.save(produto);
    }
    
    @Override
    public Produto listarProdutoById(Long id)
    {
        return ProdutoRepository.findById(id).get();
    }

    @Override
    public List<Produto> listarProdutos()
    {
        return ProdutoRepository.findAll();
    }

    @Override
    public Produto atualizarProduto(Produto produto)
    {        
        ProdutoRepository.save(produto);
        
        return ProdutoRepository.findById(produto.getId()).get();
    }
    
    @Override
    public List<Produto> deletarProdutoById(Long id)
    {
        ProdutoRepository.deleteById(id);
        
        return ProdutoRepository.findAll();
    }

    @Override
    public List<Produto> deletarProduto(Produto produto)
    {
        ProdutoRepository.delete(produto);
        
        return ProdutoRepository.findAll();
    }
}
