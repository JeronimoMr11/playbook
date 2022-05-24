class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        const trick= this.applyValidationInNumber(explorer.number);
        explorer.trick= trick;
        return explorer;
    }

    static applyValidationInNumber(number){
        if(number%3 === 0 && number%5 === 0){
            return "FIZZBUZZ";
        }else if(number%3 === 0){
            return "FIZZ";
        }else if(number%5 === 0){
            return "BUZZ";
        }else{
            return number;
        }
    }
}

module.exports= FizzBuzzService;