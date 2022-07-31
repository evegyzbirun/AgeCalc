export default class Years {
  constructor(age) {
    this.age = age;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

  ConvertAgeMercury() {
    let mercuryAge = []
    if (this.age > 0) {
      mercuryAge.push(this.age * this.mercury);
      return mercuryAge;
    } else {
      return "wrong age"
    }
  }

  ConvertAgeVenus() {
    let venusAge = []
    if (this.age > 0) {
      venusAge.push(this.age * this.venus);
      return venusAge;
    } else {
      return "wrong age"
    }
  }

  ConvertAgeMars() {
    let marsAge = []
    if (this.age > 0) {
      marsAge.push(this.age * this.mars);
      return marsAge;
    } else {
      return "wrong age"
    }
  }

  ConvertAgeJupiter() {
    let jupitermarsAge = []
    if (this.age > 0) {
      jupitermarsAge.push(this.age * this.jupiter);
      return jupitermarsAge;
    } else {
      return "wrong age"
    }
  }
}


