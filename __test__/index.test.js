import Years from './../src/index.js';

describe('Years', () => {
  test('shows age in earth years', () => {
    let earthYears = new Years(20);
    expect(earthYears.age).toEqual(20);
  });

  test('convert earth age to Mercury years', () => {
    let ageOne = new Years(20);
    let pick = "mercury";
    expect(ageOne.ConvertAge(pick)).toEqual(4.8);
  });
});