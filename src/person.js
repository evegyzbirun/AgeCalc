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
      let merExpectancy = (this.expectancy - this.age) * .24;
      return merExpectancy;
    }
    else if (this.planet === 'ven') {
      let venExpectancy = (this.expectancy - this.age) * .62;
      return venExpectancy;
    }
    else if (this.planet === 'mar') {
      let marExpectancy = (this.expectancy - this.age) * 1.88;
      return marExpectancy;
    }
    //else if (planet === 'jup') {
    //   let jupExpectancy = this.expectancy * 11.86;
    //   return jupExpectancy;
    //}
    else {
      let result = (this.expectancy - this.age);
      return result;
    }
  }
}







