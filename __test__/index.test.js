import Years from './../src/index.js';

describe('Years', () => {

  test('shows age in earth years', () => {
    const earthYears = new Years(20);
    expect(earthYears.age).toEqual(20);
  });

  test('convert earth age to Mercury years', () => {
    const age = new Years(20);
    expect(age.ConvertAgeMercury()).toEqual([4.8]);
  });
  test('convert earth age to Venus years', () => {
    const age = new Years(20);
    expect(age.ConvertAgeVenus()).toEqual([12.4]);
  });
  test('convert earth age to Mars years', () => {
    const age = new Years(20);
    expect(age.ConvertAgeMars()).toEqual([37.599999999999994]);
  });
  test('convert earth age to Jupiter years', () => {
    let age = new Years(20);
    expect(age.ConvertAgeJupiter()).toEqual([237.2]);
  });

  test('when we got wrong age', () => {
    let age = new Years(-5);
    expect(age.ConvertAgeJupiter()).toEqual("wrong age");
  });
});
