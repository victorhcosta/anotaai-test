# List of Files in src

- app/app-routing.module.ts
- app/app.component.html
- app/app.component.scss
- app/app.component.spec.ts
- app/app.component.ts
- app/app.module.ts
- app/modules/pages/list/card/card.component.html
- app/modules/pages/list/card/card.component.scss
- app/modules/pages/list/card/card.component.spec.ts
- app/modules/pages/list/card/card.component.ts
- app/modules/pages/list/interfaces/card.ts
- app/modules/pages/list/list-routing.module.ts
- app/modules/pages/list/list.component.html
- app/modules/pages/list/list.component.scss
- app/modules/pages/list/list.component.spec.ts
- app/modules/pages/list/list.component.ts
- app/modules/pages/list/list.module.ts
- app/modules/pages/list/services/list.service.spec.ts
- app/modules/pages/list/services/list.service.ts
- app/modules/shared/components/header/header.component.html
- app/modules/shared/components/header/header.component.scss
- app/modules/shared/components/header/header.component.spec.ts
- app/modules/shared/components/header/header.component.ts
- app/modules/shared/mocks/itens.ts
- app/modules/shared/shared.module.ts
- assets/images/logo.png
- assets/scss/reset.scss
- assets/svg/close.svg
- assets/svg/search.svg
- environments/environment.development.ts
- environments/environment.ts
- favicon.ico
- index.html
- main.ts
- styles.scss

## File: app/app-routing.module.ts
```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/pages/list/list.module').then(module => module.ListModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

## File: app/app.component.html
```
<router-outlet />

```

## File: app/app.component.scss
```

```

## File: app/app.component.spec.ts
```
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

```

## File: app/app.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';
}

```

## File: app/app.module.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## File: app/modules/pages/list/card/card.component.html
```
<section class="card">
  <header class="card__header">
    <span class="card__header--relative">
      <img class="card__image-header" [src]="content?.img" [alt]="content?.title + ' imagem'">

      <span
        class="card__badge"
        [class.card__badge--landscape]="content?.type === '1'"
        [class.card__badge--flower]="content?.type === '2'"
        [class.card__badge--pizza]="content?.type === '3'"
      >
        @switch (content?.type) {
          @case ('1') {Paisagem}
          @case ('2') {Flor}
          @case ('3') {Pizza}
        }
      </span>
    </span>

    <button class="button-close" (click)="remove()">
      <img class="button-close__icon" src="assets/svg/close.svg" alt="remover item" />
    </button>
  </header>
  <h1 class="card__title">
    {{ content?.title }}
  </h1>
  <p class="card__content">
    {{ content?.description }}
  </p>
</section>

```

## File: app/modules/pages/list/card/card.component.scss
```
.card {
  --close-size: 25px;
  --card-padding: 10px;

  background-color: #FFF;
  max-width: 200px;
  height: 350px;
  position: relative;
  transition: transform 1s ease, filter 0.1s ease;
  padding-inline: var(--card-padding);

  &:hover {
    transform: scale(1.1);
  }

  &__header {
    overflow: hidden;
    width: calc(100% + var(--card-padding));

    &--relative {
      position: relative;
    }
  }

  &__image-header {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  &__badge {
    position: absolute;
    bottom: 5px;
    right: 5px;
    border: 1px solid var(--badge-color);
    border-radius: 5px;
    background-color: var(--badge-color);
    color: #FFF;
    min-width: min-content;
    padding: 3px;
    font-size: 0.8em;

    &--landscape {
      --badge-color: #0056ff;
    }

    &--flower {
      --badge-color: #ff0148;
    }

    &--pizza {
      --badge-color: #968803;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: bolder;
    margin-block: 5px;
  }

  &__content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    overflow: hidden;
    width: 90%;
    height: calc(1.2em + 150px);
    text-overflow: ellipsis;
    line-height: 1.3em;
    font-size: 14px;
  }

}

.button-close {
  background-color: var(--header-bg-color);
  border: 1px solid var(--body-bg-color);
  border-radius: 100%;
  position: absolute;
  top: -10px;
  right: -15px;
  padding: 0px;
  cursor: pointer;

  &__icon {
    width: var(--close-size);
    height: var(--close-size);
    transition: transform 1s ease, filter 0.1s ease;
  }

  &:hover &__icon {
    transform: rotate(180deg);
    filter: brightness(0) saturate(100%) invert(13%) sepia(99%) saturate(7437%) hue-rotate(357deg) brightness(104%) contrast(101%);
  }
}

```

## File: app/modules/pages/list/card/card.component.spec.ts
```
import { render, fireEvent } from '@testing-library/angular';
import '@testing-library/jest-dom';

import { CardComponent } from './card.component';
import { flower, pizza, tree } from '../../../shared/mocks/itens';

describe('CardComponent', () => {
  it('should create', async () => {
    const { fixture } = await render(CardComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display content correctly', async () => {
    const { getByRole, container } = await render(CardComponent, { componentProperties: { content: flower } });

    expect(getByRole('heading', { name: flower.title })).toBeTruthy();
    expect(container.querySelector('.card__content')?.textContent?.trim()).toBe(flower.description);
  });

  it.each([
    { type: tree.type, textLabel: 'Paisagem', cssClass: 'card__badge--landscape', content: tree },
    { type: flower.type, textLabel: 'Flor', cssClass: 'card__badge--flower', content: flower },
    { type: pizza.type, textLabel: 'Pizza', cssClass: 'card__badge--pizza', content: pizza },
  ])('should have $cssClass when content type is $type', async ({ cssClass, content, textLabel }) => {
    const { container } = await render(CardComponent, { componentProperties: { content } });
    const badgeText = container.querySelector('.card__badge')?.textContent;

    expect(container.querySelector(`.${cssClass}`)).toBeTruthy();
    expect(badgeText).toContain(textLabel);
  });

  it('should emit event when click in the remove button', async () => {
    const { getByRole, fixture } = await render(CardComponent, {
      componentProperties: { content: flower }
    });

    const button = getByRole('button', { name: /remover item/i });

    jest.spyOn(fixture.componentInstance, 'remove');
    jest.spyOn(fixture.componentInstance.removeCard, 'emit');

    fireEvent.click(button);

    expect(fixture.componentInstance.remove).toHaveBeenCalled();
    expect(fixture.componentInstance.removeCard.emit).toHaveBeenCalledWith(flower.id);
  });

  it('should scale the card on hover', async () => {
    const { container } = await render(CardComponent, { componentProperties: { content: tree } });
    const card = container.querySelector('.card') as Element;

    fireEvent.mouseOver(card);

    expect(container.querySelector('.card')).toHaveStyle('transform: scale(1.1)');
  });
});

```

## File: app/modules/pages/list/card/card.component.ts
```
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

```

## File: app/modules/pages/list/interfaces/card.ts
```
export interface ICard {
  id: number;
  title: string;
  description: string;
  img: string;
  type: "1" | "2" | "3"
}

```

## File: app/modules/pages/list/list-routing.module.ts
```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }

```

## File: app/modules/pages/list/list.component.html
```
<main class="container">
  <app-header></app-header>

  <section class="filter">
    <input class="filter__input" [formControl]="searchControl" (keyup)="filter()" />
    <button class="filter__button">
      <img src="assets/svg/search.svg" alt="Filtrar" />
    </button>
  </section>

  <section class="card-list">
    @for (card of cards; track card.id) {
      <app-card [content]="card" (removeCard)="remove($event)"></app-card>
    }
  </section>
</main>

```

## File: app/modules/pages/list/list.component.scss
```
.container {
  min-height: 100vh;
  background-color: var(--body-bg-color);
}

.filter {
  display: flex;
  justify-content: center;
  margin-block: 20px;
  margin-inline: 1vw;
  width: 90%;

  &__input {
    width: 75%;
    border: none;
  }

  &__button {
    border: 0.1px solid rgba(127, 127, 127, 0.5);
    background-color: #FFF;
    cursor: pointer;
  }
}

.card-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

```

## File: app/modules/pages/list/list.component.spec.ts
```
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { render, fireEvent, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';

import { ListComponent } from './list.component';
import { SharedModule } from '../../shared/shared.module';
import { list } from '../../shared/mocks/itens';
import { ListService } from './services/list.service';
import { CardComponent } from './card/card.component';

describe('ListComponent', () => {
  const imports = [
    HttpClientTestingModule,
    ReactiveFormsModule,
    SharedModule,
  ];
  const declarations = [CardComponent];
  const mockListService = {
    getCards: jest.fn().mockReturnValue(of(list)),
    filter: jest.fn(),
    remove: jest.fn(),
  };

  it('should create', async () => {
    const { fixture, getByRole } = await render(ListComponent, { imports, declarations });

    expect(fixture.componentInstance).toBeTruthy();
    expect(getByRole('heading', { name: 'Teste de Desenvolvedor Front-End - Anota AI' })).toBeInTheDocument();
  });

  it('should display cards correctly after data fetch', async () => {
    await render(ListComponent, {
      imports,
      declarations,
      providers: [
        { provide: ListService, useValue: mockListService }
      ],
      componentProviders: [
        { provide: ListService, useValue: mockListService }
      ],
    });

    expect(screen.getByRole('heading', { name: list[0].title })).toBeInTheDocument();
    expect(mockListService.getCards).toHaveBeenCalled();
  });

  it('should filter cards based on input', async () => {
    await render(ListComponent, {
      imports,
      declarations,
      providers: [
        { provide: ListService, useValue: mockListService }
      ],
      componentProviders: [
        { provide: ListService, useValue: mockListService }
      ],
    });

    fireEvent.input(screen.getByRole('textbox'), { target: { value: list[0].title } });
    fireEvent.keyUp(screen.getByRole('textbox'));

    expect(mockListService.filter).toHaveBeenCalledWith(list[0].title);
  });

  it('should remove a card when remove is triggered', async () => {
    const { getAllByRole, fixture } = await render(ListComponent, {
      imports,
      declarations,
      providers: [
        { provide: ListService, useValue: mockListService }
      ],
      componentProviders: [
        { provide: ListService, useValue: mockListService }
      ],
    });
    const allRemoveButtons = getAllByRole('button', { name: /remover item/i });
    const spyRemove = jest.spyOn(fixture.componentInstance['_listService'], 'remove');

    fireEvent.click(allRemoveButtons[0]);

    expect(spyRemove).toHaveBeenCalledWith(list[0].id);
  });

  it('should clean up on destroy', async () => {
    const { fixture } = await render(ListComponent, { imports, declarations });
    const component = fixture.componentInstance;

    fixture.destroy();
    expect(component['destroy$'].isStopped).toBeTruthy();
  });
});

```

## File: app/modules/pages/list/list.component.ts
```
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

```

## File: app/modules/pages/list/list.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListRoutingModule,
    SharedModule,
  ]
})
export class ListModule { }

```

## File: app/modules/pages/list/services/list.service.spec.ts
```
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { ListService } from './list.service';
import { flower, list, pizza, sunflower, tree, wholePizza } from '../../../shared/mocks/itens';
import { environment } from '../../../../../environments/environment';

describe('ListService', () => {
  let service: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch cards from the API and update local cards data', () => {
    const mockCards = [tree, list];
    const http = TestBed.inject(HttpClient);
    jest.spyOn(http, 'get').mockReturnValue(of(mockCards));

    service.getCards().subscribe();

    expect(http.get).toHaveBeenCalledWith(`${environment.awsURL}/cardlist.json`);
    expect(service['_cards']).toEqual(mockCards);
  });

  it('should filter cards correctly based on the filter text', () => {
    service['_cards'] = list;

    let filtredCards = service.filter(sunflower.title);
    expect(service['_lastFilter']).toEqual(sunflower.title);
    expect(filtredCards).toEqual([sunflower]);

    filtredCards = service.filter('');
    expect(service['_lastFilter']).toEqual('');
    expect(filtredCards).toEqual(list);
  });

  it('should remove a card by id', () => {
    service['_cards'] = [tree, pizza, flower];

    const remainingCards = service.remove(pizza.id);
    expect(remainingCards).toEqual([tree, flower]);
  });
});

```

## File: app/modules/pages/list/services/list.service.ts
```
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

```

## File: app/modules/shared/components/header/header.component.html
```
<header class="header">
  <img class="image" src="assets/images/logo.png" alt="Logo Anota Ai" />
  <span class="titles">
    <h1>
      Teste de Desenvolvedor Front-End - Anota AI
    </h1>
    <h2>
      Victor Costa
    </h2>
  </span>
</header>

```

## File: app/modules/shared/components/header/header.component.scss
```
.header {
  display: flex;
  background-color: var(--header-bg-color);
  padding-block: 10px;

  .image {
    height: 50px;
  }

  .titles {
    display: flex;
    flex-direction: column;
    gap: 25%;

    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 16px;
      color: var(--subtitle-color);
    }
  }
}

```

## File: app/modules/shared/components/header/header.component.spec.ts
```
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

## File: app/modules/shared/components/header/header.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

```

## File: app/modules/shared/mocks/itens.ts
```
import { ICard } from "../../pages/list/interfaces/card";

export const tree: ICard = {
  id: 1,
  title: "Árvore",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-01.jpg",
  type: "1"
};

export const flower: ICard = {
  id: 2,
  title: "Flor",
  description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-02.jpg",
  type: "2"
};

export const pizzaSlice: ICard = {
  id: 3,
  title: "Fatia de pizza",
  description: "Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-03.jpg",
  type: "3"
};

export const sunflower: ICard = {
  id: 4,
  title: "Girassol",
  description: "It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-04.jpg",
  type: "2"
};

export const pizza: ICard = {
  id: 5,
  title: "Pizza",
  description: "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-05.jpg",
  type: "3"
};

export const wholePizza: ICard = {
  id: 6,
  title: "Pizza inteira",
  description: "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-06.jpg",
  type: "3"
};

export const list: ICard[] = [tree, flower, pizzaSlice, sunflower, pizza, wholePizza];

```

## File: app/modules/shared/shared.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }

```

## File: assets/scss/reset.scss
```
/* Reset CSS */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

body {
	font-family: 'Open Sans', sans-serif;
}

```

## File: environments/environment.development.ts
```
export const environment = {
  awsURL: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com',
};

```

## File: environments/environment.ts
```
export const environment = {
  awsURL: 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com',
};

```

## File: index.html
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Front</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

## File: main.ts
```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```

## File: styles.scss
```
/* You can add global styles to this file, and also import other style files */
@import url('./assets/scss/reset.scss');

:root {
  --header-bg-color: #FFF;
  --body-bg-color: #efefef;
  --subtitle-color: #999;
}

```
