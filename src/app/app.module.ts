import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MusicListComponent } from './music-list/music-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [	
    AppComponent,
      MusicListComponent,
      SearchBarComponent,
      CardComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
