import Years from './../src/index.js';

describe('Years', () => {
  test('shows age in earth years', () => {
    let earthYears = new Years(20);
    console.log(earthYears);
    expect(earthYears.age).toEqual(20);
  });
})