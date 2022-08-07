export default class Person {
  constructor(name, age, activity, planet) {
    this.name = name;
    this.age = age;
    this.expectancy = 70;
    this.activity = activity;
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
    this.planet = planet;
  }

  ConvertMercuryAge() {
    this.mercuryYears = this.age * .24;
    return this.mercuryYears;
  }

  ConvertVenusAge() {
    this.venusYears = this.age * .62;
    return this.venusYears;
  }

  ConvertMarsAge() {
    this.marsYears = this.age * 1.88;
    return this.marsYears;
  }

  ConvertJupiterAge() {
    this.jupiterYears = this.age * 11.86;
    return this.jupiterYears;
  }

  Expectancy() {
    if (this.planet === 'mer') {
      this.expectancy = (this.expectancy - this.age) * .24;
      return this.expectancy;
    } else if (this.planet === 'ven') {
      this.expectancy = (this.expectancy - this.age) * .62;
      return this.expectancy;
    } else if (this.planet === 'mar') {
      this.expectancy = (this.expectancy - this.age) * 1.88;
      return this.expectancy;
    } else if (this.planet === 'jup') {
      this.expectancy = (this.expectancy - this.age) * 11.86;;
      return this.expectancy;
    } else {
      this.expectancy = (this.expectancy - this.age);
      return this.expectancy;
    }
  }

  CheckAge() {
    if ((this.age > 80) || (this.age < 0)) {
      return "not valid";
    } else {
      return "valid";
    }
  }
  Active() {
    if (this.activity === "active") {
      this.expectancy += 5;
      let resultActiv = (this.expectancy - this.age);
      return resultActiv;
    } else {
      this.expectancy -= 10;
      let resultActiv = (this.expectancy - this.age);
      return resultActiv;

    }
  }
}