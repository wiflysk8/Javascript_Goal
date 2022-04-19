let piramide = "";
for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++ ) {
    piramide += i;
  }
  piramide += '\n';
}

console.log(piramide);