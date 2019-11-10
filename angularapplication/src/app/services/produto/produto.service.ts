import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../../models/produto';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService {
  public baseUrlService = '';

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUrlService = configService.getUrlService() + 'api/loja'
  }

  adicionarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrlService + '/criar', produto);
  }

  listarProdutos(): Observable<Produto[]>  {
    return this.http.get<Produto[]>(this.baseUrlService + '/listar');
  }

  listarProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.baseUrlService + '/listar/' + id);
  }

  atualizarProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.baseUrlService + '/atualizar/', produto);
  }

  deletarProduto(id: number): Observable<Produto[]>  {
    return this.http.delete<Produto[]>(this.baseUrlService + '/deletar/' + id);
  }
}
