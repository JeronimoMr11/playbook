const ServiceController= require('../../lib/controllers/ExplorerController');

describe("Checking ServiceController", function() {
    test("(1) Check getExplorersUsernamesByMission function",()=>{
        const mission= null; 

        const explorers= ServiceController.getExplorersUsernamesByMission(mission);
        expect(explorers.error).toMatch("Mission is required");
    })

    test("(2) Check getExplorersUsernamesByMission function",()=>{
        const mission= "node"; 

        const explorers= ServiceController.getExplorersUsernamesByMission(mission);
        expect(explorers).toContain('ajolonauta1');
    })
    test("(2.1) Check getExplorersUsernamesByMission function",()=>{
        const mission= "java"; 

        const explorers= ServiceController.getExplorersUsernamesByMission(mission);
        expect(explorers).toContain('ajolonauta6');
    })
    test("(3) Check getAmountOfExplorersByMission function",()=>{
        const mission= null; 

        const amount= ServiceController.getAmountOfExplorersByMission(mission);
        expect(amount.error).toMatch("Mission is required");
    })
    test("(4) Check getAmountOfExplorersByMission function",()=>{
        const mission= "node"; 

        const amount= ServiceController.getAmountOfExplorersByMission(mission);
        expect(amount).toBe(1);
    })
    test("(4.1) Check getAmountOfExplorersByMission function",()=>{
        const mission= "java"; 

        const amount= ServiceController.getAmountOfExplorersByMission(mission);
        expect(amount).toBe(1);
    })
});