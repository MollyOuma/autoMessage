class Automessage{
    constructor(field, part1=[], part2=[], part3=[]){
        this.field = field;       
        this.part1 = ['beutiful', 'yellow', 'red', 'brown', 'blue', 'black', 'purple'];
        this.part2 = ['short', 'tall', 'awesome', 'long', 'sparkling'];
        this.part3 = ['trouser', 'jacket', 'dress', 'wonderland', 'galaxy', 'harmony', 'serenity'];
    }

    generateRandomMessage() {
        /*
        Input: 3 input arrays each making the  parts of message to be generated
         */
        let index1 = Math.floor(Math.random() * this.part1.length);
        let index2 = Math.floor(Math.random() * this.part2.length);
        let index3 = Math.floor(Math.random() * this.part3.length);
        
        return this.part1[index1] + ' ' + this.part2[index2] + ' ' + this.part3[index3];
        
    }
    displayMessage(){
        let message = this.generateRandomMessage();
        console.log(message);
        return message;
    }
}

let messageGenerator = new Automessage();
messageGenerator.displayMessage();