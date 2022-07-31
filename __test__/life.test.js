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
    const person = new Life("Kory", 24, 70, 60);
    const ageTotal = person.Expectancy();
    const mercuryAgeTotal = personAge.ConvertAgeMercury(ageTotal);
    expect(mercuryAgeTotal).toEqual([5.76]);
  });

  test('how namy venus years the person will live on Venus', () => {
    const personAge = new Years(38);
    const person = new Life("James", 38, 70, 60);
    const ageTotal = person.Expectancy();
    const venusAgeTotal = personAge.ConvertAgeVenus(ageTotal);
    expect(venusAgeTotal).toEqual([23.56]);
  });

  test('how namy mars years the person will live on Mars', () => {
    const personAge = new Years(27);
    const person = new Life("Alex", 27, 70, 60);
    const ageTotal = person.Expectancy();
    const marsAgeTotal = personAge.ConvertAgeMars(ageTotal);
    expect(marsAgeTotal).toEqual([50.76]);
  });

  test('how namy mars years the person will live on Mars', () => {
    const personAge = new Years(23);
    const person = new Life("Emma", 23, 70, 60);
    const ageTotal = person.Expectancy();
    const jupiterAgeTotal = personAge.ConvertAgeJupiter(ageTotal);
    expect(jupiterAgeTotal).toEqual([272.78]);
  });

  test('how many years person overlive', () => {
    const person = new Life("David", 70, 70, 60);
    const over = person.Over();
    expect(over).toEqual(-5);
  });

  test('how many years person overlive', () => {
    const person = new Life("David", 24, 70, 60);
    const over = person.Over();
    expect(over).toEqual("didn't over live");
  });

  test('how many mercury years person overlive on Mercury', () => {
    const personAge = new Years(60);
    const personActivity = new Years(70);
    const personSport = new Years(60);
    const person = new Life("David", 60, 70, 60);
    const over = person.Over();
    const mercuryAge = personAge.ConvertAgeMercury(over);
    expect(personAge.ConvertAgeMercury()).toEqual([14.399999999999999]);
    expect(personActivity.ConvertAgeMercury()).toEqual([16.8]);
    expect(personSport.ConvertAgeMercury()).toEqual([14.399999999999999]);

  });
});