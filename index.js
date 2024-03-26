// create a function called receivesAFunction
// add parameter callback 

function receivesAFunction(callback) {
        return (callback());
}
// give the callback function a value
function callback(string) {
    return "This function is called back.";
}
// call receivesAFunction
receivesAFunction(callback);

// create a function called returnsANamedFunction
// add a parameter for Need For Speed game nfs
//returns a function gamername which returns a string Alistairs
function returnsANamedFunction(nfsGame) {
    console.log (nfsGame);
       return function gamerName(name) {
        return "Alistairs"
       }
}
// create an anonymous function returnsAnAnonymousFunction
// add parameter for gamer age 
// add an anonymous function without a name as the return
function returnsAnAnonymousFunction(gamerAge) {
    console.log (gamerAge);
    return function () {
        return 22;
    }
}