import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputboundComponent } from './inputbound/inputbound.component';
import { SecondchildComponent } from './secondchild/secondchild.component';

@NgModule({
  declarations: [
    AppComponent,
    InputboundComponent,
    SecondchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
