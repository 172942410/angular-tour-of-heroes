import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'perry'},
{id: 12, name: '钢铁侠'},
{id: 13, name: '美国队长'},
{id: 14, name: '灭霸'},
{id: 15, name: '鹏军李'},
{id: 16, name: '刘磊'},
{id: 17, name: '张天虹'},
{id: 18, name: '赵正印'},
{id: 19, name: '小泽玛利亚'},
{id: 20, name: '波多野结衣'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
