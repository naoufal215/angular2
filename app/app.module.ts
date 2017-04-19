import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import {routing} from './App.routing';

@NgModule({
  declarations: [AppComponent,UserComponent,AboutComponent],
  imports: [BrowserModule, FormsModule,HttpModule, routing],
  bootstrap: [AppComponent]
})

export class AppModule {
}