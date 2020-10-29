import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ColorPropDirective } from './directive/colorprop.directive';
import { CarryArrDirective } from './directive/carry-arr.directive';
import { TriggeroutDirective } from './directive/triggerout.directive';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { SampleComponent } from './sample/sample.component';
import { ChildsampleComponent } from './childsample/childsample.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    ColorPropDirective, 
    CarryArrDirective, 
    TriggeroutDirective, 
    TemplatedrivenComponent, SampleComponent, ChildsampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, Navbar]
})
export class AppModule { }

