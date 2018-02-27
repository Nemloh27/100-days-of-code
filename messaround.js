
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  console.log(Object.keys(collection));
  console.log(collection[0].hasOwnProperty(source));
  
  console.log(collection[1].hasOwnProperty(source));
  
  console.log(collection[2].hasOwnProperty(source));
  
  // Only change code above this line
  return arr;
}

debugger
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });