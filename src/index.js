export default class Years {
  constructor(age) {
    this.age = age;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

  ConvertAge(pick) {
    //we input earth years and pick one of planets.
    const pick1 = "mercury";
    const pick2 = "venus";
    const pick3 = "mars";
    const pick4 = "jupiter";
    if (pick1 === "mercury") {
      return this.age * this.mercury;
    } else if (pick2 === "venus") {
      return this.age * this.venus;
    } else if (pick3 === "mars") {
      return this.age * this.mars;
    } else (pick4 === "jupiter")
    return this.age * this.jupiter;

  }
}

