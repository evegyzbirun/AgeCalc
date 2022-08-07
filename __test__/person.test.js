import Person from '../src/person.js';

describe('Person', () => {

  test('Earth age and name', () => {
    const personOne = new Person("Alex", 20);
    expect(personOne.name).toEqual("Alex");
    expect(personOne.age).toEqual(20);
  });

  test('convert earth age to Mercury years, Venus years, Mars years, Jupiter years', () => {
    const personAge = new Person("Alex", 20);
    expect(personAge.ConvertMercuryAge()).toEqual(4.8);
    expect(personAge.ConvertVenusAge()).toEqual(12.4);
    expect(personAge.ConvertMarsAge()).toEqual(37.599999999999994);
    expect(personAge.ConvertJupiterAge()).toEqual(237.2)
    expect(personAge.name).toEqual("Alex");
  });

  test('life expectancy on Earth', () => {
    const age = new Person("Alex", 60, 5, 'earth');

    expect(age.Expectancy()).toEqual(10);
  });

  test('life expectancy on Mercury', () => {
    const age = new Person("Alex", 40, 5, 'mer');
    expect(age.Expectancy()).toEqual(7.199999999999999);
  });

  test('life expectancy on Venus', () => {
    const age = new Person("Alex", 35, 5, 'ven');
    expect(age.Expectancy()).toEqual(21.7);
  });

  test('life expectancy on Mars', () => {
    const age = new Person("John", 43, 5, 'mar');
    expect(age.Expectancy()).toEqual(50.76);
  });

  test('life expectancy on Jupiter', () => {
    const age = new Person("John", 50, 5, 'jup');
    expect(age.Expectancy()).toEqual(50.76);
  });
});
