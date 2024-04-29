import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { ICard } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private _lastFilter = '';
  private _cards: ICard[] = [];
  private _filtredCards: ICard[] = [];

  constructor(
    private readonly _http: HttpClient,
  ) { }

  getCards() {
    return this._http
      .get<ICard[]>(`${environment.awsURL}/cardlist.json`)
      .pipe(
        tap(cards => this._cards = cards),
        tap(cards => this._filtredCards = cards),
      );
  }

  filter(filterText: string): ICard[] {
    this._lastFilter = filterText;

    if (!filterText) {
      this._filtredCards = [];
      return this._cards;
    };

    const filtredCards = this._cards.filter(card => {
      const titleMathc = card.title.toLowerCase().includes(filterText.toLowerCase());
      const descriptionMathc = card.description.toLowerCase().includes(filterText.toLowerCase());

      return titleMathc || descriptionMathc;
    });

    this._filtredCards = filtredCards;

    return filtredCards;
  }

  remove(cardId: number): ICard[] {
    this._filtredCards = this._filtredCards.filter(card => card.id !== cardId);;
    this._cards = this._cards.filter(card => card.id !== cardId);;

    return this._lastFilter.length ? this._filtredCards : this._cards;
  }
}
