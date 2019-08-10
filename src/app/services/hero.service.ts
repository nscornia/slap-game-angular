import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Action } from '../models/Action'
import { Hero } from '../models/hero/Hero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private httpClient: HttpClient) {}

  public getHeroes(): Observable<any[]> {
    // return this.httpClient.get('http://hero-ws/heroes');

    return of([
      new Hero(
        'Maya',
        100,
        [new Action('melee', '', 10, 'attack')],
        [new Action('shield', '', 10, 'defense')],
        'assets/Maya.jpg'
      ),
      new Hero(
        'Brick',
        100,
        [new Action('melee', '', 10, 'attack')],
        [new Action('shield', '', 10, 'defense')],
        'assets/Brick.jpg'
      )
    ])

    // return of([new Hero()])

    // return of([
    //   {
    //     name: "Maya"
    //   },
    //   {
    //     name: "Brick"
    //   }
    // ]);
  }
}
