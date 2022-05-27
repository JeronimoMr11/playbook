const Reader= require('../../../lib/utils/Reader');
const ExplorerService= require("../../app/Services/ExplorerService");

describe("Check ExplorerService class",()=>{
    test("(1) Check the number of explorers",()=>{
        const explorers= Reader.readJson("./explorers.json");
        const len= ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(len).toBe(10);
    })
    test("(2) Check the name of first explorer",()=>{
        const explorers= Reader.readJson("./explorers.json");
        const names= ExplorerService.getExplorerUSernamesByMission(explorers, "node");
        expect(names[0]).toBe("ajolonauta1");
    })
})