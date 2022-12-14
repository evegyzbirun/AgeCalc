export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.expectancy = 70;
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
  }

  convertMercuryAge() {
    this.mercuryYears = this.age * .24;
  }

  convertVenusAge() {
    this.venusYears = this.age * .62;
  }

  convertMarsAge() {
    this.marsYears = this.age * 1.88;
  }

  convertJupiterAge() {
    this.jupiterYears = this.age * 11.86;
  }

  expectancyEarth() {
    if (this.expectancy >= this.age) {
      return `You still have ${this.expectancy - this.age} years to live on Earth`;
    } else {
      return `You have lived ${this.age - this.expectancy} years longer than expected`;
    }
  };

  expectancyMercury() {
    if (this.expectancy >= this.age) {
      return `You still have ${(this.expectancy - this.age) * .24} years to live on Mercury`;
    } else {
      return `You have lived ${(this.age - this.expectancy) * .24} years longer than expected`;
    }
  }

  expectancyVenus() {
    if (this.expectancy >= this.age) {
      return `You still have ${(this.expectancy - this.age) * .62} years to live on Venus`;
    } else {
      return `You have lived ${(this.age - this.expectancy) * .62} years longer than expected`;
    }
  }

  expectancyMars() {
    if (this.expectancy >= this.age) {
      return `You still have ${(this.expectancy - this.age) * 1.88} years to live on Mars`;
    } else {
      return `You have lived ${(this.age - this.expectancy) * 1.88} years longer than expected`;
    }
  }

  expectancyJupiter() {
    if (this.expectancy >= this.age) {
      return `You still have ${(this.expectancy - this.age) * 11.86} years to live on Jupiter`;
    } else {
      return `You have lived ${(this.age - this.expectancy) * 11.86} years longer than expected`;
    }
  }
}