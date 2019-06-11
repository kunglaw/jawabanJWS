function firstDuplicate(str) {
    var currentChar = "";
    for(var i = 0; i < str.length; i++) {
        for(var j = 0; j < str.length; j++) {
            if(str[i] === str[j] && i !== j) {
                return str[i]
            }
        } 
    }
    return "no duplicate"
}

console.log(firstDuplicate("ABCDABC")) // A
console.log(firstDuplicate("GFHS")) // no duplicate