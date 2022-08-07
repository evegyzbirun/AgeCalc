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

  test('incorrect age', () => {
    let age = new Person(-5);
    expect(age.Age()).toEqual("wrong age");
  });

  test('life expectancy on Earth', () => {
    const age = new Person(60);
    expect(age.expectancy()).toEqual(10);
  });

  test('life expectancy on other planets', () => {
    const mercury = new Person(40);

    expect(age.expectancy()).toEqual(7);
  });
});
16.8 