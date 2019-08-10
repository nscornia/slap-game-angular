import { Action } from "../Action";

export class Hero {
  constructor(
    public name: string,
    public health: number,
    public attacks: Action[],
    public defenses: Action[],
    public image: string
  ) {}
}
