import Person from '../src/person.js';

describe('Person', () => {

  test('Earth age and name', () => {
    const personOne = new Person("Alex", 20);
    expect(personOne.name).toEqual("Alex");
    expect(personOne.age).toEqual(20);
  });

  test('convert earth age to Mercury years', () => {
    const personAge = new Person("Alex", 20);
    expect(personAge.convertMercuryAge()).toEqual(4.8);
    expect(personAge.name).toEqual("Alex");
  });

  test('convert earth age to Venus years', () => {
    const personAge = new Person("Alex", 20);
    expect(personAge.convertVenusAge()).toEqual(12.4);
    expect(personAge.name).toEqual("Alex");
  });

  test('convert earth age to Mars years', () => {
    const personAge = new Person("Alex", 20);
    expect(personAge.convertMarsAge()).toEqual(37.599999999999994);
    expect(personAge.name).toEqual("Alex");
  });

  test('convert earth age to Jupiter years', () => {
    const personAge = new Person("Alex", 20);
    expect(personAge.convertJupiterAge()).toEqual(237.2)
    expect(personAge.name).toEqual("Alex");
  });

  test('how long expectancy on Earth', () => {
    const person = new Person("John", 42);
    expect(person.name).toEqual("John");
    expect(person.expectancyEarth()).toEqual('You still have 28 years to live on Earth');
  })

  test('how long expectancy on Mercury', () => {
    const person = new Person("John", 42);
    expect(person.name).toEqual("John");
    expect(person.expectancyMercury()).toEqual('');
  })

  test('', () => {

  })
});
