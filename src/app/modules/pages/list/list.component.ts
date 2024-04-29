import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

import { ICard } from './interfaces/card';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  cards: ICard[] = [];
  searchControl = new FormControl('');

  constructor(
    private readonly _listService: ListService,
  ) { }

  ngOnInit(): void {
    this._listService.getCards()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: cards => this.cards = cards,
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  filter() {
    this.cards = this._listService.filter(this.searchControl.value || '');
  }

  remove(cardId: number) {
    this.cards = this._listService.remove(cardId);
  }
}
