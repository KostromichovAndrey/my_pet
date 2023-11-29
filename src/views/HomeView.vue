<script setup>
import TheWelcome from '../components/TheWelcome.vue'

const firstName = "Andrey";
const secondName = "Kostromichov";



const personInfo = (arr = []) => {
  arr.forEach((person, index) => {
    
    person.id = index + 1;
    person.fullName = fullName(person.firstName, person.secondName)

    console.log(person, 'person');
    // const user = fullName(person.firstName, person.secondName)

    // console.log(user, 'user');

  })
}

const persons = [
  {
    firstName: "Andrey",
    secondName: "Kostromichov",
    age: 33,
  }, 
  {
    firstName: "Roman",
    secondName: "Kostromichov",
    age: 36,
  }, 
  {
    firstName: "Ropak",
    secondName: "Kakashka",
    age: 32,
  }, 
];

const persons2 = [
  {
    firstName: "Andrey2",
    secondName: "Kostromichov",
    age: 33,
  }, 
  {
    firstName: "Roman2",
    secondName: "Kostromichov",
    age: 36,
  }, 
  {
    firstName: "Ropak2",
    secondName: "Kakashka",
    age: 32,
  }, 
];


personInfo(persons);
personInfo(persons2);

console.log(persons, 'persons');
console.log(persons2, 'persons2');


function fullName(firstName, secondName) {
  let iuqwetyriuqwyetriuqweyrt = firstName + " " + secondName
  
  return iuqwetyriuqwyetriuqweyrt;
} 

// const foo = fullName("Ropak", "Kakashka");

// const foo2 = fullName("Andrey", "Kostromichov");

// const foo3 = fullName("Roman", "Kostromichov");

// console.log(foo, "foo");
// console.log(foo2, "foo2");
// console.log(foo3, "foo3");

// const fullName = () => { 
//   let foo = firstName + " " +  secondName
// }


</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
