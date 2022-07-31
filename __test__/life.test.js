import Life from './../src/life.js';
import Years from './../src/index.js';


describe('Life', () => {

  test('person with name and age', () => {
    const person = new Life("Maria", 22);
    expect(person.name).toEqual("Maria");
    expect(person.age).toEqual(22);
  });

  test('person Expectancy', () => {
    const person = new Life("Maria", 22);
    person.activity = 70;
    person.sport = 60;
    const result = person.Expectancy();
    expect(result).toEqual(43);
    expect(person.activity).toEqual(70);
    expect(person.sport).toEqual(60);
  });

  test('how namy mercury years the person will live on Mercury', () => {
    const personAge = new Years(24);
    const person = new Life("Kory", 24);
    person.activity = 70;
    person.sport = 60;
    const ageTotal = person.Expectancy();
    const mercuryAgeTotal = personAge.ConvertAgeMercury(ageTotal);
    expect(mercuryAgeTotal).toEqual([5.76]);
  });

  test('how namy venus years the person will live on Venus', () => {
    const personAge = new Years(38);
    const person = new Life("James", 38);
    person.activity = 70;
    person.sport = 60;
    const ageTotal = person.Expectancy();
    const venusAgeTotal = personAge.ConvertAgeVenus(ageTotal);
    expect(venusAgeTotal).toEqual([23.56]);
  });

});