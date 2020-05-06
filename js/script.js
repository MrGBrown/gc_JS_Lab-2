/* const tempCelsius = parseInt(prompt('Enter Temperature: '));
const targetUnit = prompt('Enter Unit: ');
let finalTemp;*/

const name1 = 'Greg';
const name2 = 'Ray';
const name3 = 'Charles';
let longestName;

if (name1.length > name2.length && name3.length) {
    console.log(`${name1} has the longest name.`)
} else if (name2.length > name3.length && name1.length) {
    console.log(`${name2} has the longest name.`)
} else if (name3.length > name2.length && name2.length) {
    console.log(`${name3} has the longest name.`)
} else {
    console.log('Hm.')
}

/*switch (targetUnit) {
    case 'C' :
        finalTemp = tempCelsius;
        alert(finalTemp);
        break;
    case 'F':
        finalTemp = (tempCelsius * (9 / 5)) + 32;
        alert(tempCelsius += 32);
        break;
    case 'K':
        finalTemp = tempCelsius + 273.15;
        alert(finalTemp);
        break;
    default:
        console.log('Unreadable');
        break;
}*/



/*if (actualTemp >= desiredTemp) {
    console.log('Run A/C');
} else if (desiredTemp >= actualTemp) {
    console.log('Run Heat')
} else {
    console.log('Standby')
}*/


/*for (let i = 10; i >= 0; i--) {
    console.log(i);
}*/

/*let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}*/

/*let repeatedQ;

do {
    let response = prompt('How about that weather huh?');
    if (response === 'stop asking') {
        repeatedQ = false;
    } else {
        repeatedQ = true;
    }
} while (repeatedQ)*/

/*let numbers = [1,2,3,4,5,6,9,10]

for (let numerical of numbers) {
    console.log(numerical);
}*/

/*let result = '';
let i = 11;

do {
  i--;
  result += i + ' ';
} while (i >= 2);

console.log(result);*/

/*let i = 11;

while (i >= 2) {
    i--;
    console.log(i);
}*/