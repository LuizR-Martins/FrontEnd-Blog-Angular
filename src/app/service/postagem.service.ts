import { Postagem } from './../model/Postagem';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getPostagem(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${environment.usuario}/postagens`, this.token)
  }

  getPostagemById(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`${environment.usuario}/postagens/${id}`, this.token)
  }

  getPostagemByTitulo(titulo: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${environment.usuario}/postagens/titulo/${titulo}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(`${environment.usuario}/postagens`, postagem, this.token)
  }

  putputagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(`${environment.usuario}/postagens`, postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`${environment.usuario}/postagens/${id}`, this.token)
  }
}
