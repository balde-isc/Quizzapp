import { Routes } from '@angular/router';
import {RegistroComponent} from './registro/registro.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CompartirComponent} from './compartir/compartir.component';
import {QuizzComponent} from './quizz/quizz.component';
import {ResultadoComponent} from './resultado/resultado.component';

export const appRoutes: Routes = [
{path: 'registro', component: RegistroComponent},
{path: 'quizz', component: QuizzComponent},
{path: 'resultado', component: ResultadoComponent},
{path: '', redirectTo: '/registro', pathMatch: 'full'}
];
