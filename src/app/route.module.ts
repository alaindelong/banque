import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { OperationComponent} from './operation/operation.component';
import { CompteComponent } from './compte/compte.component';
import { ClientComponent } from './client/client.component';
import { CarelloComponent } from './carello/carello.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    {path: 'operations', component: OperationComponent},
    {path: 'comptes', component: CompteComponent},
    {path: 'clients', component: ClientComponent},
    {path: 'home', component: AcceuilComponent},
    {path: 'login', component: HomeComponent},
    {path: '', redirectTo:'login', pathMatch:'full'},
   ];
   
@NgModule({
   
      imports: [
        RouterModule.forRoot(appRoutes),
      ],
      exports: [
          RouterModule
      ],
})
export class RouteModule {}

export const routingComponent = [     
    AcceuilComponent,
    OperationComponent,
    CompteComponent,
    ClientComponent,
    CarelloComponent,
    HomeComponent
  ];