import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { CompartirComponent } from './compartir/compartir.component';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    NavbarComponent,
    QuizzComponent,
    ResultadoComponent,
    CompartirComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
