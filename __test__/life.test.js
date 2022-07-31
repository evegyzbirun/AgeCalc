import Life from './../src/life.js';
import Years from './../src/index.js';

describe('Life', () => {

  test('person with name and age', () => {
    const person = new Life("Maria", 22);
    expect(person.name).toEqual("Maria");
    expect(person.age).toEqual(22);
  });

});