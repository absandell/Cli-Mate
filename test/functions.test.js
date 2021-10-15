const functions = require('../functions')

test('convert feet traveled to carbon index', ()=>{
    expect(functions.feetToCI(100)).toBe(150);
})