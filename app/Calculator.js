var Calculator = {
    current: 0,

    add: function () {
        for (var i = 0; i < arguments.length; i++) {
            this.current += arguments[i];
        }
        return this.current;
    },

    subtract: function (number) {
        for (var i = 0; i < arguments.length; i++) {
            this.current -= arguments[i];
        }
        return this.current;
    }
}