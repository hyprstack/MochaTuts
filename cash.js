```javascript
//The getChange function is a simple calculator that only performs subtractions. It returns the amount of change split into various
//notes and coins

var C = {}; //C object simplifies exporting the object - see module.exports = C 

	C.coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

	C.getChange = function(totalPayable, cashPaid) {
		
		'use strict';
		
		var change = [];
		var length = C.coins.length; //this will make our prgram slightly faster by memoisation
		var remaining = cashPaid - totalPayable;  //we reduce this below

		//loop through array of coins and notes
		for(var i = 0; i<length; i++) {  //notice how length is used from above. This means that the length parameter will only be 
			                             //initialized once, as oposed to being initialized with each iteration had we used C.coins.length
			                             //in our loop
         var coin = C.coins[i];

         if(remaining/coin >=1) {  //check coin fits into the remaining amount
         	var times = Math.floor(remaining/coin);  //no partial coins

         	for(var j = 0; j < times; j++) {  //add coin to change x times
         		change.push(coin);
         		remaining = remaining - coin;  //subtract coin from remaining
         	}
         }
		}
		return change
};

module.exports = C; //module.exports is the object that is actually returned as the result of a 'require' call.
```