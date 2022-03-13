let n = parseInt(prompt("Enter a number:"));

for (j = 2; j <= n; j++) {
  let p = 1;
  let i = 2;

  while (i < j) {
    if (parseInt(j % i) == 0) {
      p = 0;
      break;
    }
    i++;
  }
  if (p == 1) {
    console.log("Number is prime:" + j);
  }
}