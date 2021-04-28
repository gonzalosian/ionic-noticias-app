import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiaComponent
  ],
  exports: [
    NoticiasComponent,
  ],
  imports: [
    CommonModule,
    IonicModule, // Hay que importar esto porque sino los nuevos componentes estarán aislados
  ]
})
export class ComponentsModule { }
