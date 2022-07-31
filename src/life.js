export default class Life {
  constructor(name, age, activity, sport) {
    this.name = name;
    this.age = age;
    this.activity = activity;
    this.sport = sport;
  }

  Expectancy() {
    const totall = (this.activity + this.sport) / 2;
    return totall - this.age;
  }

  Over() {
    const over = this.Expectancy() + this.age;
    if (this.age > over) {
      return over;
    } else {
      return "didn't over live"
    }
  }
}