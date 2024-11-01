// 1-misol
let n = parseInt(prompt("1. n ni kiriting"));
let i = 1;
while (i <= n) {
  console.log(i);
  i++;
}
// 2-misol
let a = parseInt(prompt("2. Son kiriting?"));
let b = 1;
while (b <= a) {
  if (b % 5 === 0) {
    console.log(b);
  } else if (b % 3 === 0) {
    console.log(b);
  }
  b++;
}
// 3-misol
let p = parseInt(prompt("3. n ni kiriting (n dan 1 gacha bo'lgan sonlar)"));
while (p >= 1) {
  console.log(p);
  p--;
}
// 4-misol
let A = parseInt(prompt("4. a ni kiriting:"));
let B = parseInt(prompt("4. b ni kiriting:"));
let sum = 0;
let count = 0;
let I = A;
while (I <= B) {
  A + B;
  sum += I;
  count++;
  I++;
}
console.log("Yig'indi:", A + B);
console.log("Sonlar soni:", Number(A, B));
// 5-misol
let ad = parseInt(prompt("5. a ni kiriting:"));
let ba = parseInt(prompt("5. b ni kiriting:"));
let it = ad;
while (it <= ba) {
  if (ba % it === 0) {
    console.log(it);
  }
  it++;
}
//6-misol
let ab = parseInt(prompt("6. a ni kiriting:"));
let be = parseInt(prompt("6. b ni kiriting:"));
let sums = 0;
let ir = a;
while (ir <= be) {
  if (be % ir === 0) {
    sums += ir;
  }
  ir++;
}
console.log("Bo'luvchilar yig'indisi:", sums);
// 7-misol
let ag = parseInt(prompt("a ni kiriting:"));
let br = parseInt(prompt("b ni kiriting:"));
console.log(`${br} ning bo'luvchilari:`);
for (let ih = ag; ih <= br; ih++) {
  if (br % ih === 0) {
    console.log(ih);
  }
}
// 8-misol
let AD = parseInt(prompt("A ni kiriting:"));
let BA = parseInt(prompt("B ni kiriting:"));
let counte = 0;
while (AD >= BA) {
  AD -= BA;
  counte++;
}
console.log("Joylashtirish mumkin bo'lgan soni:", counte);
//9-misol
let AK = parseInt(prompt("A ni kiriting:"));
let BK = parseInt(prompt("B ni kiriting:"));
while (AK >= BK) {
  AK -= BK;
}
console.log("Qoldiq:", AK);
//10-misol
let na = parseFloat(prompt("n ni kiriting (0.1 dan n gacha):"));
let price = 0.1;
while (price <= na) {
  console.log(price.toFixed(1));
  price += 0.1;
}
//11-misol
let num = parseInt(prompt("Ikki xonali sonni kiriting:"));
let tens = Math.floor(num / 10);
let ones = num % 10;
if (tens > ones) {
  console.log("O'nliklar birliklardan katta:", tens);
} else if (ones > tens) {
  console.log("Birliklar o'nliklardan katta:", ones);
} else {
  console.log("O'nliklar va birliklar teng:", tens);
}
//12-misol
let bc = parseInt(prompt("b ni kiriting:"));
let isPrime = true;
let iw = 2;
while (iw <= Math.sqrt(bc)) {
  if (bc % iw === 0) {
    isPrime = false;
    break;
  }
  iw++;
}
if (isPrime && bc > 1) {
  console.log(bc, "soni tub");
} else {
  console.log(bc, "soni tub emas");
}
