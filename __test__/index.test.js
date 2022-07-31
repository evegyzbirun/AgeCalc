import Years from './../src/index.js';

describe('Years', () => {
  test('shows age in earth years', () => {
    const earthYears = new Years(20);
    expect(earthYears.age).toEqual(20);
  });

  test('convert earth age to Mercury years', () => {
    const age = new Years(20);
    const pick = "mercury";
    expect(age.ConvertAge(pick)).toEqual(4.8);
  });
  test('convert earth age to Venus years', () => {
    const age = new Years(20);
    const pick = "venus";
    expect(age.ConvertAge(pick)).toEqual(12.4);
  });
  test('convert earth age to Mars years', () => {
    const age = new Years(20);
    const pick = "mars";
    expect(age.ConvertAge(pick)).toEqual(37.6);
  });
  test('convert earth age to Jupiter years', () => {
    const age = new Years(20);
    const pick = "jupiter";
    expect(age.ConvertAge(pick)).toEqual(237.2);
  });
});