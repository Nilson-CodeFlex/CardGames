import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './Deck.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeckComponent],
  exports: [DeckComponent]

})
export class DeckModule { }
