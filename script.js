function minToSec(minutes) {
    return minutes * 60
}

function aZaroven(bool, bool1) {
    if (bool && bool1) {
        return true
    } else {
        return false
    }
}

function twoParameters(x,y) {
    if (x >= 0 && y >= 0) {
        return x + y
    } else {
        return -1
    }
}

console.log(minToSec(60))
console.log(aZaroven(true,true))
console.log(twoParameters(-5,1))