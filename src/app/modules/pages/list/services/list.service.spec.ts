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
