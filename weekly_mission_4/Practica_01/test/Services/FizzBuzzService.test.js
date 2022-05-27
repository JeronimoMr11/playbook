const FizzbuzzService= require('../../../lib/Services/FizzBuzzService');

describe("Test for FizzBuzz class",()=>{
    test('(1) Test for Fizz', () => { 
        const explorer1 = {name: "Explorer1", score: 1}
        const explorer= FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer.trick).toBe(1);
     })
    test('(2) Test for Buzz', () => { 
        const explorer3 = {name: "Explorer3", score: 3}
        const explorer= FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(explorer.trick).toBe("FIZZ");
     })
    test('(3) Test for FizzBuzz', () => { 
        const explorer5 = {name: "Explorer5", score: 5}
        const explorer= FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(explorer.trick).toBe("BUZZ");
     })
    test('(4) Test for otherwise', () => { 
        const explorer15 = {name: "Explorer15", score: 15}
        const explorer= FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(explorer.trick).toBe("FIZZBUZZ");
 })
});