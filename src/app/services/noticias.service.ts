import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
})

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage = 0;
  categoriaActual = '';
  categoriaPage = 0;


  constructor( private http: HttpClient ) { }

  private ejecutarQuery<T>( query: string ){
    return this.http.get<T>(`${apiUrl}${query}`, {headers} )
  }

  getTopHeadlines(){
    this.headlinesPage++;

    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=ar&page=${this.headlinesPage}`)
    // return this.http.get<RespuestaTopHeadlines>(`${apiUrl}/top-headlines?country=ar&apiKey=ac54e743d85342ad8f5a49cc4a3baa3e`)
  }
  
  getTopHeadlinesCategoria( categoria: string ){
    if( this.categoriaActual === categoria ){
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }

    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=ar&category=${ categoria }&page=${ this.categoriaPage }`)
    // return this.http.get<RespuestaTopHeadlines>(`${apiUrl}/top-headlines?country=de&category=${ categoria }&apiKey=ac54e743d85342ad8f5a49cc4a3baa3e`)
  }
}
