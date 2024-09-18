// let sentence = 'I love programming';

// // String size
// let numOfChars = sentence.length
// console.log(`Number of characters: ${numOfChars}`);

// // First character
// console.log(`First character : ${sentence[0]}`);

// // Last character
// console.log(`Last character: ${sentence[numOfChars - 1]}`);

// // Check if the first character start with I vs i
// console.log(`Start with I? ${sentence.startsWith('I')}`);

// // Replace love with hate
// console.log(`Replace love with hate: ${sentence.replace('love', 'hate')}`);

// // Boolean: checks if it ends with programming
// console.log(`Does it end with programming? ${sentence.endsWith('programming')}`);

// // Boolean: checks if it includes love
// console.log(`includes: ${sentence.includes('love')}`);

// // Spilt creates an array of characters
// console.log(`Split : ${sentence.split('')}`);

// // Slice: getting a portion of a string
// console.log(`Slice : ${sentence.slice(7, 14)}`);

// // charAt() returns a character at a specific position 
// console.log(`char at 2: ${sentence.charAt('2')}`);

// // concat() allows us to combine the value that we have 
// console.log(`concat: ${sentence.concat(' and Jamin')}`);

// //indexOf()
// console.log(`first index of g: ${sentence.indexOf('g')}`);

// //Last Index of
// console.log(`last index of g: ${sentence.lastIndexOf('g')}`);

// //substring (same like slice)
// console.log(`substring 3rd character: ${sentence.substring('3')}`);

// //to uppercase
// console.log(`Uppercase: ${sentence.toUpperCase('')}`);

// //removes space before and after the string value
// //trim
// console.log(`Trim: ${sentence.trim()}`);

// //trimStart
// console.log(`Trim Start: ${sentence.trimStart('')}`);

// //trimEnd
// console.log(`Trim End: ${sentence.trimEnd('')}`);

// let numb1 = 2;
// console.log(`Numb1 : ${numb1}`);
// let numb2 = ++numb1;
// console.log(`Numb2 : ${numb2}`);
// console.log(`Current value of Numb1 : ${numb1}`);

// let numb1 = 89.45874
/* It will simply display a number; in this case, the value of x is 89.3, hence the result is 89.
Or It will delete the decimal part of a number.
*/
// console.log(Math.trunc(numb1));

// Round the value close to the lowest number such as 89.5 -> 89 | -89.5 -> -90
// console.log(Math.floor(numb1));

// Round the value close to the highest number such as 89.5 -> 90 | -89.5 -> -89
// console.log(Math.ceil(numb1));

// If the decimal number begins with five, round it to the nearest integer value.
// console.log(Math.round(numb1));

// To round your output to two place precision.
// console.log(numb1.toFixed(2));

/*
Check if a number is a number
- isNaN() Not a number. If it returns false, it means it's a number.
- typeof numb1 === 'number' ? 'It a number' : 'Not a number'
*/

//Deep copy using Array.from
// let arr1 = [1, 4, 5];
// let arr2 = Array.from(arr1);

// arr2[0] = 10;
// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

// console.log("I have dog's their names are");


//How to create a recursive function
// function loop(cnt, limit) {
//     if (cnt > limit){
//         return
//     }

//     else{
//         console.log(cnt);
//         loop(cnt + 1, limit);
//     }
// }

// loop(0, 10);

//Factory Function
// function personDetails(firstName, lastName){
//     return{firstName, lastName}
// }

// let person1 = personDetails ('John', 'Bruce');
// let person2 = personDetails ('Sipho', 'Nkebe');
// console.log (person1);
// console.log (person2);

// function PersonDetails
// (name, surname, age){
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
// }

// let person1 = new PersonDetails('Leah', 'Basson', '19');
// let person2 = new PersonDetails('Jamin', 'Langeveldt', '20');
// console.log(person1);
// console.log(person2);

// function personDetails(firstName, lastName) {
//     return {
//         firstName,
//         lastName,
//         display () {
//             console.log(
//                 `First name: ${firstName}\nLast name: ${lastName}`);
//         }
//     }
// }

// let person1 = personDetails ('Sipho', 'Nkebe')
// console.log(person1);
// person1.display();

async function fetchData() {
    let response = await fetch('https://randomuser.me/api/?results=50')
    let data = await response.json()
    return data
}
/*
- synchronous function:
- asynchronous function
*/
let wrapper = document.querySelector('[wrapper]')
async function displayData() {
    let data = await fetchData()
    let results = await data.results
    results.forEach((data) => {
        wrapper.innerHTML += `
            <div class='car'>
                <img src='${data.picture.large}' alt='${data.name.first}' loading="lazy">
                <p>
                    <span>${data.name.title}</span>
                    <span>${data.name.first} ${data.name.last}</span>
                </p>
            </div>
        `
    })
}
displayData()




