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
    return this.mercuryYears;
  }

  convertVenusAge() {
    this.venusYears = this.age * .62;
    return this.venusYears;
  }

  convertMarsAge() {
    this.marsYears = this.age * 1.88;
    return this.marsYears;
  }

  convertJupiterAge() {
    this.jupiterYears = this.age * 11.86;
    return this.jupiterYears;
  }

  expectancyEarth() {
    if (this.expectancy >= this.age) {
      return `You still have ${this.expectancy - this.age} years to live on Earth`;
    } else {
      return `You have lived ${this.age - this.expectancy} years longer than expected`;
    }
  }

  expectancyMercury() {
    if (this.expectancy >= this.age) {
      return `You still have ${(this.expectancy - this.age) * .24} years to live on Mercury`;
    } else {
      return `You have lived ${(this.age - this.expectancy) * .24} years longer than expected`;
    }
  }

  expectancyVenus() {
    if (this.expectancy >= this.age) {
      return `You still have ${(this.expectancy - this.age) * 1.86} years to live on Venus`;
    } else {
      return `You have lived ${(this.age - this.expectancy) * 11.86} years longer than expected`;
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
      return `You still have ${(this.expectancy - this.age) * 1.88} years to live on Jupiter`;
    } else {
      return `You have lived ${(this.age - this.expectancy) * 1.88} years longer than expected`;
    }
  }
  // Expectancy() {
  //   if (this.planet === 'mer') {
  //     this.expectancy = (this.expectancy - this.age) * .24;
  //     return this.expectancy;
  //   } else if (this.planet === 'ven') {
  //     this.expectancy = (this.expectancy - this.age) * .62;
  //     return this.expectancy;
  //   } else if (this.planet === 'mar') {
  //     this.expectancy = (this.expectancy - this.age) * 1.88;
  //     return this.expectancy;
  //   } else if (this.planet === 'jup') {
  //     this.expectancy = (this.expectancy - this.age) * 11.86;;
  //     return this.expectancy;
  //   } else {
  //     this.expectancy = (this.expectancy - this.age);
  //     return this.expectancy;
  //   }
  // }


  // Active() {
  //   if (this.activity === "active") {
  //     this.expectancy += 5;
  //     this.expectancy = (this.expectancy - this.age);
  //     return this.expectancy;
  //   } else {
  //     this.expectancy -= 10;
  //     this.expectancy = (this.expectancy - this.age);
  //     return this.expectancy;
  //   }
  // }
}