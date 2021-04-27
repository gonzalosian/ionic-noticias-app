import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=ac54e743d85342ad8f5a49cc4a3baa3e`)
  }
}
