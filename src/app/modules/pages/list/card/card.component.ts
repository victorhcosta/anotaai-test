import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICard } from '../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() content?: ICard;
  @Output() removeCard = new EventEmitter<number>();

  remove() {
    this.removeCard.emit(this.content?.id);
  }
}
