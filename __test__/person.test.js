import Person from '../src/person.js';

describe('Person', () => {

  test('Earth age and name', () => {
    const personOne = new Person("Alex", 20);
    expect(personOne.name).toEqual("Alex");
    expect(personOne.age).toEqual(20);
  });

  test('convert earth age to Mercury years', () => {
    const personAge = new Person("Alex", 20);
    personAge.convertMercuryAge();
    expect(personAge.mercuryYears).toEqual(4.8);
  });

  test('convert earth age to Venus years', () => {
    const personAge = new Person("Alex", 20);
    personAge.convertVenusAge();
    expect(personAge.venusYears).toEqual(12.4);
  });

  test('convert earth age to Mars years', () => {
    const personAge = new Person("Alex", 20);
    personAge.convertMarsAge();
    expect(personAge.marsYears).toEqual(37.599999999999994);
  });

  test('convert earth age to Jupiter years', () => {
    const personAge = new Person("Alex", 20);
    personAge.convertJupiterAge();
    expect(personAge.jupiterYears).toEqual(237.2)
  });

  test('for how long the person left to live on Earth', () => {
    const person = new Person("John", 42);
    const personOld = new Person("Maria", 80);
    expect(person.expectancyEarth()).toEqual('You still have 28 years to live on Earth');
    expect(personOld.expectancyEarth()).toEqual('You have lived 10 years longer than expected');
  })

  test('for how long the person left to live on Mercury', () => {
    const person = new Person("John", 42);
    const personOld = new Person("Alex", 81);
    expect(person.expectancyMercury()).toEqual('You still have 6.72 years to live on Mercury');
    expect(personOld.expectancyMercury()).toEqual('You have lived 2.6399999999999997 years longer than expected');
  })

  test('for how long the person left to live on Venus', () => {
    const person = new Person("John", 31);
    const personOld = new Person("John", 91);
    expect(person.expectancyVenus()).toEqual('You still have 24.18 years to live on Venus');
    expect(personOld.expectancyVenus()).toEqual('You have lived 13.02 years longer than expected');
  })

  test('for how long the person left to live on Mars', () => {
    const person = new Person("John", 37);
    const personOld = new Person("John", 86);
    expect(person.expectancyMars()).toEqual('You still have 62.04 years to live on Mars');
    expect(personOld.expectancyMars()).toEqual('You have lived 30.08 years longer than expected');
  })

  test('for how long the person left to live on Jupiter', () => {
    const person = new Person("John", 22);
    const personOld = new Person("John", 88);
    expect(person.expectancyJupiter()).toEqual('You still have 569.28 years to live on Jupiter');
    expect(personOld.expectancyJupiter()).toEqual('You have lived 213.48 years longer than expected');
  })
});
