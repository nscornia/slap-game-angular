import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'
import { debounceTime, tap } from 'rxjs/operators'
import { Hero } from '../models/hero/Hero'
import { HeroService } from '../services/hero.service'
import { Villain } from '../villain/Villain'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  public heroes$ = new BehaviorSubject([])
  public selectedHero: string

  public guardianUsed = false

  public heroes: Hero[]

  public villains: Villain[] = []

  public jack = {
    name: 'Handsome Jack',
    health: 100,
    hits: 0,
    multiplier: 1,
    defense: [] as any[]
  }

  public items = {
    shield: {
      name: `Jack's Shield Surveyor`,
      modifier: 3,
      description: 'Even his shield has an attitude.'
    },
    doppelganger: {
      name: 'Digi-Jacks',
      modifier: 1,
      description: `Can't touch this`
    }
  }

  public heroNames: string[]
  public search: FormControl

  constructor(private heroService: HeroService) {}

  public ngOnInit() {
    this.search = new FormControl('')

    this.search.valueChanges
      .pipe(debounceTime(500))
      .subscribe(input => console.log(input))

    this.heroService
      .getHeroes()
      .pipe(
        // map(heroes => {
        //   return heroes.map((hero: Hero) => ({
        //     name: hero.name,
        //     health: hero.health
        //   }))
        // })
        tap(heroes => this.heroes$.next(heroes))
      )
      .subscribe()

    // this.updateStats();
  }

  public goGuardian() {
    const guardBuff = this.jack.health + 50
    if (guardBuff >= 100) {
      const bonusBuff = guardBuff - 100
      const cappedBuff = guardBuff - bonusBuff
      this.jack.health = cappedBuff
    } else {
      this.jack.health += 50
    }
    this.updateStats()
    this.guardianUsed = true
  }

  melee() {
    const baseDamage = 2
    this.jack.health -= (baseDamage - this.addMods()) * this.jack.multiplier
    this.jack.hits++
    this.updateStats()
  }

  shoot() {
    const baseDamage = 5
    this.jack.health -= (baseDamage - this.addMods()) * this.jack.multiplier
    this.jack.hits++
    this.updateStats()
  }

  slag() {
    this.jack.health -= 1
    this.jack.multiplier += 0.5
    if (this.jack.multiplier > 2.5) {
      this.jack.multiplier = 2.5
    }
    this.jack.hits++
    this.updateStats()
  }

  addItem(item: any) {
    this.jack.defense.push(item)

    console.log(this.jack)
  }

  addMods() {
    let buffs = 0
    this.jack.defense.forEach(defense => {
      buffs += defense.modifier
    })
    return buffs

    // console.log(this.jack);

    // const buffs = this.jack.defense.reduce((accumulator, currentValue) => {
    //   const value = accumulator + currentValue.modifier;
    //   console.log(
    //     `accumulator: ${accumulator} - currentValue.modifier: ${
    //       currentValue.modifier
    //     }`
    //   );
    //   return value;
    // });
    // console.log(buffs);
    // return buffs;
  }

  updateStats() {
    if (this.jack.health <= 0) {
      this.jack.health = 0
    }
  }

  respawn() {
    this.jack.health = 100
    this.jack.hits = 0
    this.jack.multiplier = 1

    this.guardianUsed = false
  }

  // updateStats()
}
