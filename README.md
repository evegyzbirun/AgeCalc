## Age-Calculator

#### by _**(Evgeny Zbirun)**_

#### The application let user test age on planets and see live expectancy.



#### the project link to github: 

## Technologies Used:
* VS code
* Git console
* JavaScript
* ES6

## Setup instructions

1. clone with github link.
2. open with Visual Studio Code.
3. run(npm install)
4. run(npm run start) to get website link.
5. run(npm run test) to see tests.


## Known bugs
 non

## License

Copyright <2022> Evgeny Zbirun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests
** Input early years:
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
   test('person with name and age', () => {
    const person = new Life("Maria", 22);
    expect(person.name).toEqual("Maria");
    expect(person.age).toEqual(22);
  });

