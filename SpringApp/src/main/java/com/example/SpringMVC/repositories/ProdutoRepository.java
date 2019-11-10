package com.example.SpringMVC.repositories;

import com.example.SpringMVC.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>
{
    
}