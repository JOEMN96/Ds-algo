
var isPalindrome = function(x:number | String) {
    let len = x.toString().length - 1;
    let counter = 0
    x = x.toString() ;
    
    for(let i = 0; i < x.length; i++ )  {        
         if(x[i] == x[len]) {
             counter ++
         }
         len --
    }
    if(counter == x.length) {
        return true
    } else {
        return false
    }

    
};

// isPalindrome(-121)
console.log(isPalindrome(-121));


