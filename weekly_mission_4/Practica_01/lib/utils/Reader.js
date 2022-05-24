const fs= require('fs');

class Reader{
    static readJson(file){
        /**
         * Read a Json file and return the content
         * @param {string} file - The path of the file to read
         * @return {object} - The content of the file
         */
        const rawdata = fs.readFileSync(file);
        return JSON.parse(rawdata);
    }
}

module.exports= Reader;
