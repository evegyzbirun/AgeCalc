export default class Person {
  constructor(name, age, activity) {
    this.name = name;
    this.age = age;
    this.expectancy = 70;
    this.activity = activity;
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
  }

  ConvertMercuryAge() {
    this.mercuryYears = this.age * 0.24;
    return this.mercuryYears;
  }

  ConvertVenusAge() {
    this.venusYears = this.age * 0.62;
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

  Age() {
    if (18 < this.age && this.age < 80) {
      return "correct age";
    } else {
      return "wrong age";
    }
  }
  Expectancy() {

  }
}




