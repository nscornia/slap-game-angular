export class Action {
  constructor(
    public name: string,
    public description: string,
    public modifier: number,
    public type: "attack" | "defense"
  ) {}
}
