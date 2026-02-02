import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Consulta } from './consulta/consulta';
import { Homne } from './homne/homne';


export const routes: Routes = [
    {path: 'cadastro', component: Cadastro},
    {path: 'consulta',  component: Consulta},
    {path: 'homne',  component: Homne},
    
];
