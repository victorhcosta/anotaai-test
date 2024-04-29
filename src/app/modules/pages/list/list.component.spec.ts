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
