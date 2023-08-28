import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorldComponent } from './components/world/world.component';
import { WorldInfoComponent } from './components/world-info/world-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    WorldInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
