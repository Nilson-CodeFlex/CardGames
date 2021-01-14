import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckModule } from './entities/Deck/Deck.module'
import { CardModule } from './entities/Card/Card.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeckModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
