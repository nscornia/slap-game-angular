import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input()
  public hero: any

  constructor() {}

  ngOnInit() {}
}
