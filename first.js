var one = undefined
var one = 1
var oee = 2
console.log(one)

// ######################
function a() {
  console.log("Hi")
}
a()
function a() {
  console.log("Bye")
}

let canada = () => {
  console.log("arguments", arguments);
  console.log("Canada");
}

canada();
// function india() {
//   console.log("India");
// }


function india(andhra, delhi) {
  console.log(arguments, arguments);
  //console.log("India");
}


india("a", "b");

function india(...args) {
  console.log(arguments, arguments);
  console.log(" Array.from(arguments)", Array.from(arguments))
  //console.log("India");
}

india("a", "b", "c");

