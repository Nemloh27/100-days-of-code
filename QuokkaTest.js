function addTogether () {

    function numCheck (num) {
        if (typeof num !== 'number') {
            return undefined;
        } else {
            return num;
        }
    }

    var a = arguments[0];
    var b = arguments[1];
    var c = arguments[0];

    if (arguments.length > 1) {
        if (numCheck(a) === undefined || numCheck(b) === undefined) {
            return undefined;
        } else {
            return a + b;
        }
    } else {
        return function(x) {
            if (numCheck(c) === undefined || numCheck(x) === undefined) {
                return undefined;
            } else {
                return a + b;
            }
        }
    }
}

addTogether(2, 3) //should return 5.
// addTogether(2)(3) //should return 5.
// addTogether("http://bit.ly/IqT6zt") //should return undefined.
// addTogether(2, "3") //should return undefined.
// addTogether(2)([3]) //should return undefined.