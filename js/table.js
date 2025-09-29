// User se number lena
var num = prompt("Koi number likhiye jiska table dekhna hai:");

// String ko number me convert karna
num = Number(num);

// Console me table print karna
console.log(num + " ka Table:");
for (var i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}
