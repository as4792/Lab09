
//Q1
let charachters = ['Harry', 'Hermione' , 'Ron', 'Draco', 'Luna'];
for (let i = 0; i < charachters.length; i++) { console.log(charachters[i])}
//Q2 HELP
let firstName= "Harry";
let house= "Griffindor";
console.log('Welcome, ${firstName} of ${house}!');
//Q3
let charachterName='Hermione';
console.log(charachterName.toLowerCase());
console.log(charachterName.toUpperCase());
//Q4
let spell='Expelliarmus';
console.log(spell.trim());
//Q5
let quote='I solemnly swear that I am up to no good.';
console.log(quote.slice(11,17));
//Q6
let firstName2='Ron';
let lastName='Weasley';
console.log(firstName2.concat(lastName));
//Q7
let sentence= 'Draco is a good wizard';
console.log(sentence.replace('good','bad'));
//Q8
let houses=['Gryffindoe', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop('Slytherin');
console.log(houses);
//Q9
let spells=['Alohomora','Lumos','Nox']
spells.unshift('Accio');
spells.shift('Accio');
console.log(spells);
//Q10
let professors=['Dumbledore', 'McGonagall', 'Snape','Hagrid'];
let Newprofessors= professors.slice(1,3);
console.log(Newprofessors);
//Q11
let students=['Neville','Seamus','Dean','Parvati'];
let Newstudents= students.splice(0,2,0);
console.log(Newstudents);
//Q12
let phrase='Mischief Managed';
let phrase2= phrase.trim().toLowerCase().concat('- Harry');
console.log(phrase2);
//Q13
let wizards= ['Harry', 'Hermione','Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);
//Q14 HELP
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardy';
let message2= message.slice().concat('Castle');
console.log(message2);