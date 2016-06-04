var Calculator = {
    current: 0,

    add: function(number){
        this.current += number;
        return this.current;
    }
}