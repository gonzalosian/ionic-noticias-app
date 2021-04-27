import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService ) {}
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.noticiasService.getTopHeadlines()
      .subscribe( noticias => {
        console.log(noticias);
        // this.noticias = noticias.articles;
        // Usando el operador Spread, extraemos e insertamos de manera indep. cada elemento
        this.noticias.push( ...noticias.articles );
      } )
  }

}