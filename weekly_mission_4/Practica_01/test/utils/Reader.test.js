const Reader= require('../../lib/utils/Reader');

describe("Test for Reader class",()=>{
    test('Check that return is not null', () => { 
        const data= Reader.readJson("./explorers.json");
        expect(data).toBeDefined();
    });
});