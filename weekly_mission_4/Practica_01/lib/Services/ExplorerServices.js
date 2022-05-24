// Part 2: Get the quantity of explorers names in node
// Part4: Get the explorer's usernames in Node

class ExplorerSevice{
    static filterByMission(explorers, mission){
        /**
         * Filter the explorers by mission
         * @param {array} explorers - The list of explorers
         * @param {string} mission - The mission to filter
         * @return {array} - The list of explorers filtered by mission
         */
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission){
        /**
         * Get the amount of explorers by mission
         * @param {array} explorers - The list of explorers
         * @param {string} mission - The mission to filter
         * @return {number} - The amount of explorers filtered by mission
         */
        return this.filterByMission(explorers, mission).length;
    }
    static getExplorerUSernamesByMission(explorers, mission){
        /** 
         * Get the explorer's usernames by mission
         * @param {array} explorers - The list of explorers
         * @param {string} mission - The mission to filter
         *  @return {array} - The list of usernames filtered by mission
         */
        return this.filterByMission(explorers, mission).map((explorer) => explorer.githubUsername);
    }
}

module.exports= ExplorerSevice;