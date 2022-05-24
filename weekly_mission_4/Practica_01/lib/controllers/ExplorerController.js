const Reader= require('../utils/Reader');
const ExplorerService= require('../services/ExplorerService');
const FizzBuzzService= require('../services/FizzBuzzService');

class ExplorerController{
    static getExplorersUsernamesByMission(mission){
        if( mission === null ){
            return {
                error: "Mission is required"
            };
        }

        const file= Reader.readJson( "./d_explorers.json" );
        return ExplorerService.getExplorerUSernamesByMission(file, mission);
    }

    static getAmountOfExplorersByMission(mission){
        if( mission === null ){
            return {
                error: "Mission is required"
            };
        }
        const file= Reader.readJson( "./d_explorers.json" );
        return ExplorerService.getAmountOfExplorersByMission(file, mission);
    }

    static getExplorersByMission(mission){
        if( mission === null ){
            return {
                error: "Mission is required"
            };
        }
        const file= Reader.readJson( "./d_explorers.json" );
        return ExplorerService.filterByMission(file, mission);
    }

    static getTrickByNumber(number){
        if( number === null ){
            return {
                error: "Number is required"
            };
        }
        return FizzBuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;n