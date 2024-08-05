//string1 Berilgan so‘zda a harfi nechta borligini aniqlovchi funksiya yozing
/*
function func(word) {
    let counter = 0;
    let lowerCaseWord = word.toLowerCase();
    for(let i = 0; i < lowerCaseWord.length; i++) {
        if(lowerCaseWord[i] === 'a') {
            counter += 1;
        }
    }
    return counter;
}
console.log(func('assalom'));  //2
*/

//string2 Berilgan so‘zning oxirgi 3 harfini qaytaruvchi funksiya yozing
/*
function func(word) {
    return word.slice(-3);
}
console.log(func('salom'));  // Natija: "lom"
*/

//string3 Berilgan so‘zdagi har bir so‘zning birinchi harfini katta qiluvchi funksiya yozing
/*
function func(string) {
    let words = string.split(' ');
    let arr = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            let Word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            words.push(Word);
        } else {
            words.push(word);
        }
    }
    return words.join(' ');
}
*/

//string4  Berilgan so‘zdan barcha bo‘sh joylarni olib tashlaydigan funksiya yozing
/*
function func(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            result += string[i];
        }
    }
    return result;
}
*/

//string5 Berilgan so‘zni teskari qilib qaytaruvchi funksiya yozing
/*
function reverseString(string) {
    let arr = string.split('');
    arr.reverse();
    return arr.join('');
}
*/

//string6 Berilgan so‘zda nechta belgi borligini aniqlovchi funksiya yozing
/*
function countCharacters(string) {
    return string.length;
}
*/

//string7 Berilgan so‘zni 3 marta takrorlab qaytaruvchi funksiya yozing
/*
function func(string) {
    return string.repeat(3);
}
*/

//string8 Berilgan so‘zdan faqat sonlarni olib qaytaruvchi funksiya yozing
/*
function extractNumbers(string) {
    let characters = string.split('');
    let numbers = characters.filter(char => char >= '0' && char <= '9');
    return numbers.join('');
}
*/

//string9 Berilgan so‘zdagi birinchi so‘zni qaytaruvchi funksiya yozing
/*
function func(string) {
    let words = string.split(' ');
    return words[0];
}
*/

//string10 Berilgan so‘zda ‘js’ so‘z birikmasi borligini tekshiruvchi funksiya yozing
/*
function containsJS(string) {
    return string.toLowerCase().includes('js');
}
*/

//Massiv1 Berilgan massivdagi eng katta elementni qaytaruvchi funksiya yozing
/*
function func(arr){
    let max = arr [0];
    for(let i=1; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
*/

//Massiv2 Berilgan massivdagi barcha juft sonlarni qaytaruvchi funksiya yozing.
/*
function func(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
*/

//Massiv3 Berilgan massivdagi elementlarning yig‘indisini hisoblaydigan funksiya yozing
/*
function func(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
*/

//Massiv4 Berilgan massivdagi har bir elementni 2 baravar oshiradigan va yangi massiv qaytaradigan funksiya yozing
/*
function func(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]*2);
    }
    return newArr;
}
*/

//Massiv5 Berilgan massivdagi barcha manfiy sonlarni olib tashlaydigan va yangi massiv qaytaradigan funksiya yozing.
/*
function func(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
*/

//Massiv6 Berilgan massivdagi faqat noyob elementlarni qaytaruvchi funksiya yozing.
/*
function getUniqueElements(arr) {
    const countMap = arr.reduce((count, item) => {
        count[item] = (count[item] || 0) + 1;
        return count;
    }, {});
    return arr.filter(item => countMap[item] === 1);
}
*/

//Massiv7 Ikki massivni birlashtiradigan va yangi massiv qaytaradigan funksiya yozing
/*
function func(arr1 , arr2){
    let res = arr1.concat(arr2);
    return res;
}
*/

//Massiv8 Berilgan massivni teskari tartibda qaytaruvchi funksiya yozing
/*
function func(arr){
    return arr.reverse();
}
*/

//Massiv9 Berilgan massivdan faqat toq indeksli elementlarni qaytaruvchi funksiya yozing
/*
function func(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i%2==1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
*/

//Massiv10 Berilgan massivdagi elementlarning o‘rtacha qiymatini hisoblaydigan funksiya yozing
/*
function func(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
            sum += arr[i];
    }
    let res = sum/arr.length;
    return res;
}
*/

//Obyekt1 Berilgan massivdan eng katta yoshi bor odamning ismini qaytaruvchi funksiya yozing
/*
const people = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Hasan", age: 28 }
];
function func(people) {
    let oldestPerson = people[0];
    for (let i = 1; i < people.length; i++) {
        if (people[i].age > oldestPerson.age) {
            oldestPerson = people[i];
        }
    }
    return oldestPerson.name;
}
*/

//Obyekt2 Berilgan massivdan ma'lum bir yoshdan katta bo'lgan odamlarni qaytaruvchi funksiya yozing
/*
const people = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Hasan", age: 28 }
];
function getPeopleAboveAge(people, age) {
    let newArr = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].age > age) {
            newArr.push(people[i]);
        }
    }
    return newArr;
}
console.log(getPeopleAboveAge(people, 25)); //[{ name: "Vali", age: 30 }, { name: "Hasan", age: 28 }]
*/

//Obyekt3 Berilgan massivdagi odamlarning ismlarini ro'yxat sifatida qaytaruvchi funksiya yozing
/*
const people = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Hasan", age: 28 }
];
function getNames(people) {
    return people.map(person => person.name);
}
console.log(getNames(people)); // Natija: ["Ali", "Vali", "Hasan"]
*/

//Obyekt4 Berilgan massivdagi barcha odamlarning yoshi yig'indisini hisoblaydigan funksiya yozing.
/*
const people = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Hasan", age: 28 }
];
function getTotalAge(people) {
    let sum = 0;
    for(let i = 0; i < people.length; i++){
        sum += people[i].age;
    }
    return sum;
}
*/

//Obyekt5 Berilgan massivdan ma'lum bir ismdagi odamni qaytaruvchi funksiya yozing
/*
const people = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Hasan", age: 28 }
];
function getPersonByName(people, name) {
    let newArr = [];
    for(let i = 0; i < people.length; i++){
        if(people[i].name === name){
            newArr.push(people[i]);
        }
    }
    return newArr;
}
*/

//Obyekt6 Berilgan massivdagi barcha odamlarning yoshlarini o‘rtacha qiymatini hisoblaydigan funksiya yozing
/*
const people = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Hasan", age: 28 }
];
function getAverageAge(people) {
    let sum = 0;
    for(let i = 0; i < people.length; i++){
        sum += people[i].age;
    }
    return sum/people.length;
}
*/

//Obyekt7 Berilgan massivdagi faqat ayol jinsiga mansub odamlarni qaytaruvchi funksiya yozing
/*
const people = [
    { name: "Ali", age: 25, gender: "male" },
    { name: "Vali", age: 30, gender: "male" },
    { name: "Hasan", age: 28, gender: "male" },
    { name: "Salima", age: 22, gender: "female" }
];
function getFemales(people) {
    let newArr = [];
    for(let i =0; i < people.length; i++){
        if(people[i].gender == 'female'){
            newArr.push(people[i]);
        }
    }
    return newArr;
}
*/

//Obyekt8 Berilgan massivdagi har bir odamning yoshini 1 yil oshiradigan va yangi massiv qaytaradigan funksiya yozing
/*
const people = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 },
    { name: "Hasan", age: 28 }
];
function incrementAges(people) {
    let newArr = [];
    for(let i=0; i<people.length; i++){
        people[i].age = people[i].age + 1;
        newArr.push(people[i]);
    }
    return newArr;
}*/