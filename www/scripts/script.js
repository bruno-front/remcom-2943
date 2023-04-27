console.log('script work!');
console.log('Это моя первая строка в JS');

let html = '<p class="Text">text</p>';

console.log(html);
console.log(typeof html);

html = 34;
console.log(html);
console.log(typeof html);

const Pi = 3.14;

console.log(typeof Pi);


let AmIMan = true;

let AmIBlack = false;


let petNames = ['Gans', 'Kesha', 'Robin', 'Fiona'];





console.log(petNames[0]);

console.log(petNames.length);

console.log(petNames[petNames.length - 1]);

console.log(petNames);


let pet = {
  name: 'Gans',
  type: 'Cat',
  age: 13,
  color: 'black'
}

console.log(pet);
console.log(pet.type);

let petsArray = [
  {
    name: 'Gans',
    type: 'Cat',
    age: 13,
    color: 'black'
  },
  {
    name: 'Robin',
    type: 'Mega Dog',
    age: 12,
    color: 'black'
  },
  {
    name: 'Fiona',
    type: 'Dog',
    age: 1.5,
    color: 'Black & orange'
  }
];



let a = 3;
let b = 4;
let sum = 5 + 2 * 2;
console.log(sum);


console.log('5' - 2 * 3);


let c = 1;

console.log(c);

// c = c + 1;
c++;

console.log(c); // 2

c++;

console.log(c); // 3

c++;

console.log(c); // 4

c--;

console.log(c); // 3


console.log(3 > 5);

let userAge = 14;

if (userAge < 18) {
  console.log('Иди спать мелочь пузатая');
} else if (userAge >= 65) {
  console.log('Иди внукам подгузники меняй');
} else {
  console.log('Иди работай');
}


let name = 'Alex';

console.log(name.length);

if (name) {
  console.log('Здравствуйте, ' + name);
} else {
  console.log('Здравствуйте, товарищ!');
}

for (let i = 0; i <= petNames.length; i++) {
  console.log(petNames[i]);

  // if (petNames[i].length <= 4) {
  //   console.log('короткое имя');
  // } else {
  //   console.log('не короткое имя');
  // }

  hello(petNames[i]);
}


// 4 штуки в массиве
// 0, 1, 2, 3

function summ(a, b) {
  console.log('BEFORE');
  return a + b;
}

let summ1 = summ(4, 6);
console.log(summ1);


function hello(name) {
  if (name) {
    console.log('Hello, ' + name);
  } else {
    console.log('Ваши документы, товарисчь');
  }
}

hello();
hello('Настя');
hello('Лена');






























function printMessage() {
  console.log('from printMessage');
}


let writeMessage = function () {
  console.log('from Russia with love');
}


printMessage();
writeMessage();

let catName = 'Kesha'


let cat = {
  name: 'Kesha',
  age: 20,
  mew: function (dream) {
    console.log('mmmmeeeeewww, ' + dream);
  },
  parents: {
    mother: function () {

    },
  }
}

cat.mew('ЖРАТЬ!');
cat.mew('СПАТЬ!');
console.log('ЖРАТЬ!');




// Dom-елемент, Нода Node
let serviceItem = document.querySelector('.services-item');
// serviceItem.classList.add('red')
console.log(serviceItem);

let serviceItemsArray = document.querySelectorAll('.services-item');

for (let i = 0; i < serviceItemsArray.length; i++) {
  // serviceItemsArray[i].classList.add('red');
  serviceItemsArray[i].style.backgroundColor = 'red';
  serviceItemsArray[i].style.opacity = .4;
}










