module.exports = function (){
    return {
      add: function(num1, num2) { 
           console.log("sum: ", num1 + num2) 
      },
      multiply: function(num1, num2) {
           console.log("multi: ", num1 * num2) 
      },
      square: function(num) {
            console.log("squire: ", Math.sqrt(num))
        // add code here 
      },
      random: function(num1, num2) {
           console.log("Random number: ", Math.floor(Math.random() * (num2 - num1)) + num1)
      }
    }
  };
  