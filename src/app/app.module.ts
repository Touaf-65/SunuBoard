import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import {NgClass} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveHelperComponent,
  ],
  imports: [
    BrowserModule,
    NgClass,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }