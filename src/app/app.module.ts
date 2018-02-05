import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { OperationComponent} from './operation/operation.component';
import { CompteComponent } from './compte/compte.component';
import { ClientComponent } from './client/client.component';
import { CarelloComponent } from './carello/carello.component';

const appRoutes: Routes = [
 {path: 'operations', component: OperationComponent},
 {path: 'comptes', component: CompteComponent},
 {path: 'clients', component: ClientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    OperationComponent,
    CompteComponent,
    ClientComponent,
    CarelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
