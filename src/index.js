export default class Years {
  constructor(age) {
    this.age = age;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

  ConvertAge() {
    //we input earth years and pick one of planets.
    const pick = ["mercury", "venus", "mars", "jupiter"]
    pick.forEach(e => {
      if (pick[e] === "mercury") {
        return this.age * this.mercury;
      } else (pick[e] === "venus");
      return this.age * this.venus;
    });

  }
}

