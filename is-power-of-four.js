var isPowerOfFour = function(num) {
werOfFour = function(num) {
    
    _isPowerOfFour = (num, power) => {
        const check = num - Math.pow(4, power)
        console.log(check)
        
        if (check < 0) {
            return false
        }
        
        if (check === 0) {
            return true
        }

        return _isPowerOfFour(num, ++power)
    }
        
    return _isPowerOfFour(num, 0)
};
    
    _isPowerOfFour = (num, power) => {
        const check = num - Math.pow(4, power)
        console.log(check)
        
        if (check < 0) {
            return false
        }
        
        if (check === 0) {
            return true
        }

        return _isPowerOfFour(num, ++power)
    }
        
    return _isPowerOfFour(num, 0)
};
