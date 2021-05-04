let myString: string = "This is a string";

function setString(str: string) {
    myString = str;
}
function getString(){
    return myString;
}

module.exports = { setString, getString }
