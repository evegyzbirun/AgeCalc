import Years from './../src/index.js';

describe('Years', () => {
  test('shows age in earth years', () => {
    const earthYears = new Years(20);
    expect(earthYears.age).toEqual(20);
  });
})