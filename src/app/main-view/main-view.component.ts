import { Component, OnInit } from "@angular/core";
import { HeroService } from "../services/hero.service";
import { Subject, Observable, Subscription } from "rxjs";
import { Hero } from "../models/hero/Hero";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"]
})
export class MainViewComponent implements OnInit {
  public heroes$: Subscription = new Subscription();
  public selectedHero: string;
  
  public guardianUsed: boolean = false;

  public heroes: any[] = [
    {
      name: "Maya"
    },
    {
      name: "Brick"
    }
  ];

  constructor(private heroService: HeroService) {}

  public ngOnInit() {
    this.heroes$ = this.heroService.getHeroes().subscribe();

    // this.updateStats();
  }

  public goGuardian() {
    let guardBuff = (this.jack.health + 50)
    if (guardBuff >= 100) {
      let bonusBuff = (guardBuff - 100)
      let cappedBuff = (guardBuff - bonusBuff)
      this.jack.health = cappedBuff
    }
    else this.jack.health += 50
    this.updateStats()
    this.guardianUsed = true;
  }

  public jack = {
    name: "Handsome Jack",
    health: 100,
    hits: 0,
    multiplier: 1,
    defense: []
  };

  public items = {
    //guardian: { name: 'The Guardian', modifier: 50, description: 'It\'s cute that you think you\'re the hero of this adventure, but you\'re not.' },
    shield: {
      name: "Jack's Shield Surveyor",
      modifier: 3,
      description: "Even his shield has an attitude."
    },
    doppelganger: {
      name: "Digi-Jacks",
      modifier: 1,
      description: "Can't touch this"
    }
  };

  melee() {
    let baseDamage = 2;
    this.jack.health -= (baseDamage - this.addMods()) * this.jack.multiplier;
    this.jack.hits++;
    this.updateStats();
  }

  shoot() {
    let baseDamage = 5;
    this.jack.health -= (baseDamage - this.addMods()) * this.jack.multiplier;
    this.jack.hits++;
    this.updateStats();
  }

  slag() {
    this.jack.health -= 1;
    this.jack.multiplier += 0.5;
    if (this.jack.multiplier > 2.5) {
      this.jack.multiplier = 2.5;
    }
    this.jack.hits++;
    this.updateStats();
  }


  addItem(item) {
    this.jack.defense.push(item);

    console.log(this.jack);
  }

  addMods() {
    let buffs = 0
    for (let i = 0; i < this.jack.defense.length; i++) {
      buffs += this.jack.defense.pop().modifier
    }
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
      this.jack.health = 0;
    }
  }

  respawn() {
    this.jack.health = 100;
    this.jack.hits = 0;
    this.jack.multiplier = 1;
    
    this.guardianUsed = false;
  }

  // updateStats()
}
