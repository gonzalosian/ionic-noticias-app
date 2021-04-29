import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  // Establecemos al IonSegment un valor por defecto.
  // "static : true para resolver los resultados de la consulta antes de que se ejecute la detección de cambios, 
  // false para resolver después de la detección de cambios. Por defecto es falso."
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService ) {

  }

  ngOnInit(): void {
    this.segment.value = this.categorias[0];

    this.cargarCategorias( this.categorias[0] );
    
  }

  cambioCategoria( event ){
    // console.log( event.detail.value );
    // Al cambiar de categoria habilitamos nuevamente el infinite-scroll
    // this.infiniteScroll.disabled = false;
    // Borramos el arreglo cada vez que cambiamos de categoria el segmento
    this.noticias = [];
    
    this.cargarCategorias( event.detail.value );
  }

  cargarCategorias( categoria: string, event? ){
    // this.segment.value = this.categorias[0];

    this.noticiasService.getTopHeadlinesCategoria( categoria )
      .subscribe( notiCat => {

        console.log( notiCat );

        this.noticias.push( ...notiCat.articles );

        // if( notiCat.articles.length === 0 ){
        //   event.target.disabled = true;
        //   return;
        // }

        if( event ){
          event.target.complete();
          // return;
        }
      } );
  }

  loadData( event ){
    this.cargarCategorias( this.segment.value, event )
  }

}
