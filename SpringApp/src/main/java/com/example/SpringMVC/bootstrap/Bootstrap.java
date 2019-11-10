package com.example.SpringMVC.bootstrap;

import com.example.SpringMVC.model.Produto;
import com.example.SpringMVC.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.boot.CommandLineRunner;

@Component
public class Bootstrap implements CommandLineRunner
{
    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public void run(String... args) throws Exception
    {
        System.out.println("Carregando dados...");

        Produto produto = new Produto();
        produto.setNome("Sabonete");
        produto.setDescricao("Sabonete de Camomila");
        produto.setPeso(0.2);
        produto.setPreco(4.99);
        
        produtoRepository.save(produto);

        System.out.println("Clientes salvos:" + produtoRepository.count());
    }
}