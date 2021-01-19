//Type Alias
type uid = string | number;
type phoneNo = number;

type person = {
  userId : uid;
  firstname: string,
  lastname: string,
  phoneNo : phoneNo;
  sayHI:()=> string;
};

const person1 : person = {
  userId : 'Jigar'+743,
  firstname:'Jigar',
  lastname:'Modi',
  phoneNo: 8780641220,
  sayHI : ():string => {return "Hi I am"}
}

console.log(person1.sayHI()+" "+person1.firstname+" "+person1.lastname+"."+ "My Phone No is "+person1.phoneNo);

// Interface Practicals
interface SquareConfig {
  color?: string;
  width?: number;
}

const createSquare = (config: SquareConfig): { color: string; area: number } => {
  let newSquare = { color: config.color, area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
const button = document.querySelector("button");
const input1 = document.getElementById("pointX")! as HTMLInputElement;
const input2 = document.getElementById("pointY")! as HTMLInputElement;
const paragraph = document.getElementById('demo')! as HTMLInputElement;

const obj = [];
button.addEventListener("click",function(){
  let x= createSquare({color: input1.value, width: +input2.value});
  obj.push(x);
  paragraph.innerHTML = x.color;
  console.log(obj);
  // paragraph.textContent = MoneyToWord(+money.value).toString();
});

// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// let mySquare = createSquare({ color: "green"});

// console.log(mySquare);


// function MoneyToWord(input:number) {
//     const rupees = input;
//     const output = [];
  
//     if (rupees === 0) {
//       output.push("zero");
//     } else if (rupees === 1) {
//       output.push("one");
//     } else {
//       const crores = Math.floor(rupees / 10000000) % 100;
//       if (crores > 0) {
//         output.push(`${getHundreds(crores)} crore`);
//       }
  
//       const lakhs = Math.floor(rupees / 100000) % 100;
//       if (lakhs > 0) {
//         output.push(`${getHundreds(lakhs)} lakh`);
//       }
  
//       const thousands = Math.floor(rupees / 1000) % 100;
//       if (thousands > 0) {
//         output.push(`${getHundreds(thousands)} thousand`);
//       }
  
//       const hundreds = Math.floor((rupees % 1000) / 100);
//       if (hundreds > 0 && hundreds < 10) {
//         output.push(`${getOnes(hundreds)} hundred`);
//       }
  
//       const tens = rupees % 100;
//       if (tens > 0) {
//         output.push(`${getHundreds(tens)}`);
//       }
//     }
  
//     return [ ...output,"Rupees", "only"]
//       .join(" ")
//       .split(/\s/)
//       .filter((e) => e)
//       .map((e) => e.substr(0, 1).toUpperCase() + e.substr(1))
//       .join(" ");
//   }
  
//   function getOnes(number) {
//     const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     return ones[number] || "";
//   }
  
//   function getTeens(number) {
//     const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
//     return teens[number] || "";
//   }
  
//   function getTens(number) {
//     const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
//     return tens[number] || "";
//   }
  
//   function getHundreds(num) {
//     if (num > 0 && num < 10) {
//       return getOnes(num);
//     }
//     if (num >= 10 && num < 20) {
//       return getTeens(num % 10);
//     }
//     if (num >= 20 && num < 100) {
//       return `${getTens(Math.floor(num / 10))} ${getOnes(num % 10)}`;
//     }
//     return "";
//   }


// convert.addEventListener("click",function(){
//     let x= MoneyToWord(+money.value);
//     paragraph.innerHTML = x;
//     // paragraph.textContent = MoneyToWord(+money.value).toString();
// });

// // const button = document.querySelector("button");
// // const input1 = document.getElementById("num1")! as HTMLInputElement;
// // const input2 = document.getElementById("num2")! as HTMLInputElement;

// // function add(num1: number, num2: number) {
// //   return num1 + num2;
// // }

// // button.addEventListener("click", function() {
// //   console.log(add(+input1.value, +input2.value));
// // });


